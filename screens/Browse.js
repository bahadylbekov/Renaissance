import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import axios from 'axios';

const { width } = Dimensions.get('window');

class Browse extends Component {
  state = {
    active: 'Data',
    integrations: [],
    profilesData: [],
    buttons: [],
    nucypher: null,
    privatesData: [],
    bobAccess: false,
  }

  componentDidMount() {
    this.setState({ 
      integrations: this.props.integrations,
      profilesData: this.props.profilesData,
      buttons: this.props.buttons,
      nucypher: this.props.nucypher,
      privatesData: this.props.privatesData,
    });
    this.handleTab('data')
  }

  handleTab = tab => {
    const { integrations, profilesData, buttons,  privatesData } = this.props;
    const filtered = integrations.filter(
      integration => integration.tags.includes(tab.toLowerCase())
    );
    const filteredData = profilesData.filter(
      profileData => profileData.tags.includes(tab.toLowerCase())
    )
    const filteredButton = buttons.filter(
      button => button.tags.includes(tab.toLowerCase())
    )
    const filteredPrivate = privatesData.filter(
      privateData => privateData.tags.includes(tab.toLowerCase())
    )
    this.setState({ active: tab, integrations: filtered , profilesData: filteredData, buttons: filteredButton, privatesData: filteredPrivate});
  }

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  async issuePolicyByAlice() {
    const {nucypher} = this.props;
    await axios.post('http://127.0.0.1:8151/derive_policy_encrypting_key/'+label)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.warn("fetch error:", error)
    })
}
  retrieveMessageAsBob = () => {
    const {nucypher} = this.props;
    const data = {
      "label": nucypher.label,
      "policy_encrypting_key": nucypher.pek,
      "alice_verifying_key": nucypher.avk,
      "message_kit": nucypher.message_kit
    }
    axios.post('http://127.0.0.1:11151/retrieve', data)
      .then((response) => {
        console.log(response)
        const bobData = response.data
        console.log(bobData)
        this.setState({bobAccess: true})
        alert(bobData)
      })
      .catch((error) => {
        console.warn("fetch error:", error)
        alert("Don't have access to Data")})
  }

  render() {
    const { profile, navigation, nucypher } = this.props;
    const { integrations, profilesData, buttons, privatesData, bobAccess } = this.state;
    const tabs = ['Data', 'Integrations', 'Sign-In'];

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Browse</Text>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image
              source={profile.avatar}
              style={styles.avatar}
            />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >

          <Block style={styles.dataInputs}>
            {profilesData.map(profileData => (
              <Block>
                { profileData.plainData ? 
                    <Block row space="between" margin={[10, 0]} style={styles.inputRow} key={profileData.tagName}>
                      <Block>
                        <Text gray2 style={{ marginBottom: 10 }}>{profileData.tagName}</Text>
                        <Text bold>{profileData.info}</Text>
                      </Block>
                    </Block>
                    :
                    <TouchableOpacity
                      flex={false} row space="between"                      
                      key={profileData.tagName}
                      onPress={() => navigation.navigate(profileData.navigate)}
                    >
                      <Card center middle shadow style={styles.integration}>
                        <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                          <Image source={profileData.image} style={styles.integrationImage}/>
                        </Badge>
                        <Text medium height={20}>{profileData.tagName}</Text>
                      </Card>
                    </TouchableOpacity>
                }
              </Block>  
            ))}
          </Block> 

          <Block flex={false} row space="between" style={styles.integrations}>
            {integrations.map(integration => (
              <TouchableOpacity
                key={integration.name}
                onPress={() => navigation.navigate('Service', { integration })}
              >
                <Card center middle shadow style={styles.integration}>
                  <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                    <Image source={integration.image} style={styles.integrationImage}/>
                  </Badge>
                  <Text medium height={20}>{integration.name}</Text>
                  <Text gray caption>{integration.count} requests</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
          <Block>
            {buttons.map(button => (
              <Block flex={true} style={{justifyContent: "center", alignItems: "center"}}>
                <Button gradient onPress={this.retrieveMessageAsBob} key={button.data}  style={styles.buttons} margin={[0, 0, 15]}>
                  <Text bold white center>{button.data}</Text>
                </Button>
              </Block>
            ))}
            <Block  style={styles.dataInputs}>
              {privatesData.map(privateData => (
                <Block>
                {bobAccess?
                  <Block row space="between" margin={[10, 0]} style={styles.inputRow} key={privateData.tagName}>
                    <Block>
                      <Text gray2 style={{ marginBottom: 10 }}>{privateData.tagName}</Text>
                      <Text bold>{privateData.info}</Text>
                    </Block>
                  </Block>
                  : null 
                }
                </Block>  
              ))}
            </Block>
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  integrations: mocks.integrations,
  profilesData: mocks.profilesData,
  buttons: mocks.buttons,
  nucypher: mocks.nucypher,
  privatesData: mocks.privatesData,
}

export default Browse;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  dataInputs: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingHorizontal: 32,
  },
  integrations: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  buttons: {
    minWidth: (width - (theme.sizes.padding * 2.4)),
    maxWidth: (width - (theme.sizes.padding * 2.4)),
  },
  integration: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4)),
    maxWidth: (width - (theme.sizes.padding * 2.4)),
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  },
  profileCards: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  },
  integrationImage: {
    width: 50,
    height: 50
  }
})
