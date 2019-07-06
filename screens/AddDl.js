import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme, mocks } from '../constants';
import axios from 'axios';


class AddDl extends Component {
  
  state = {
    fullName: null,
    birthDate: null,
    birthPlace: null,
    passportNumber: null,
    country: null,
    errors: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ 
      nucypher: this.props.nucypher,
    });
  }

  async sendEncryptedMessage() {
    const nucypher = this.props;

    const data = await {
      "message": "It is a message"
    }
    await axios.post('http://127.0.0.1:5151/encrypt_message',  data)
    .then(response => {
        console.log(response)
        getMessageKit = response.json()
        this.setState({message_kit:getMessageKit.result.message_kit}) 
      })
      .catch(e => {
          this.errors.push(e)
      }) 
  }


  handleAddData() {
    const { navigation, nucypher } = this.props;
    const { fullName, birthDate, birthPlace, passportNumber, country } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!fullName) errors.push('fullName');
    if (!birthDate) errors.push('birthDate');
    if (!idNumber) errors.push('idNumber');
    if (!country) errors.push('country');
    
    this.sendEncryptedMessage();
    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your data has been uploaded',
        [
          {
            text: 'Continue', onPress: () => {
              navigation.navigate('Browse')
            }
          }
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const { navigation, nucypher } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>Add your Driving Licence information</Text>
          <Block middle>
            <Input
              label="Full Name"
              error={hasErrors('fullName')}
              style={[styles.input, hasErrors('fullName')]}
              defaultValue={this.state.fullName}
              onChangeText={text => this.setState({ fullName: text })}
            />
            <Input
                date
              label="Birth Date"
              error={hasErrors('birthDate')}
              style={[styles.input, hasErrors('birthDate')]}
              defaultValue={this.state.birthDate}
              onChangeText={text => this.setState({ birthDate: text })}
            />
            <Input
                label="ID Number"
                error={hasErrors('idNumber')}
                style={[styles.input, hasErrors('idNumber')]}
                defaultValue={this.state.idNumber}
                onChangeText={text => this.setState({ idNumber: text })}
            />
            <Input
                label="Country"
                error={hasErrors('country')}
                style={[styles.input, hasErrors('country')]}
                defaultValue={this.state.country}
                onChangeText={text => this.setState({ country: text })}
            />
            <Button gradient onPress={() => this.handleAddData()}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> :
                <Text bold white center>Save</Text>
              }
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
}

AddDl.defaultProps = {
  nucypher: mocks.nucypher,
}

export default AddDl;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  }
})
