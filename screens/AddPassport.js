import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme, mocks } from '../constants';
import axios from 'axios';


class AddPassport extends Component {

  state = {
    fullName: null,
    birthDate: null,
    birthPlace: null,
    passportNumber: null,
    country: null,
    errors: [],
    loading: false,  
    message_kit: null,
  }

  componentDidMount() {
    this.setState({ 
      nucypher: this.props.nucypher,
    });
  }

  handleAddData = () => {
    const { navigation } = this.props;
    const { fullName, birthDate, birthPlace, passportNumber, country } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!fullName) errors.push('fullName');
    if (!birthDate) errors.push('birthDate');
    if (!birthPlace) errors.push('birthPlace');
    if (!passportNumber) errors.push('passportNumber');
    if (!country) errors.push('country');

    const data = {
      "message": fullName
    }   
    console.log(data)
    // axios.post('http://127.0.0.1:5151/encrypt_message', data)
    //   .then((response) => {
    //     console.log(response)
    //     this.setState({message_kit: response.data.result.message_kit})
    //     console.log(this.state.message_kit)
    //   })
    //   .catch((error) => console.warn("fetch error:", error))

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
    const { navigation,  nucypher } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>Add your Passport Information</Text>
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
              label="Birth Place"
              error={hasErrors('birthPlace')}
              style={[styles.input, hasErrors('birthPlace')]}
              defaultValue={this.state.birthPlace}
              onChangeText={text => this.setState({ birthPlace: text })}
            />
            <Input
                label="Passport Number"
                error={hasErrors('passportNumber')}
                style={[styles.input, hasErrors('passportNumber')]}
                defaultValue={this.state.passportNumber}
                onChangeText={text => this.setState({ passportNumber: text })}
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
      </ScrollView>
    )
  }
}

AddPassport.defaultProps = {
  nucypher: mocks.nucypher,
}

export default AddPassport;

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
