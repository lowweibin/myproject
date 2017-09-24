/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Formula1 from './user_input/formula1';

//import Formula2 from './user_input/formula2';

export default class AwesomeProject1 extends Component {


  render() {
    return (

        <Formula1 />






    );
  }
}
//  E_phasor= [ax()angle() + ay()angle()]exp(-jBz)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ImplementationProject', () => AwesomeProject1);
