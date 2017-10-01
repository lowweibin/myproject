/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
//import {Formula1 } from '/user_input/formula1.js';
//import {Polarization} from '/user_input/polarization.js';
import Formula1 from './user_input/formula1.js';
import Formula2 from './user_input/formula2.js';


//import Polarization from './user_input/polarization.js';
//import Formula2 from './user_input/formula2';

export default class AwesomeProject1 extends Component {
  render() {
    return (

        <View style={styles.container}>
          <Formula1 />
          <Formula2 />
        </View>



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
