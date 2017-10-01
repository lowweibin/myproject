import React, {Component} from 'react';
import { Text , TextInput , StyleSheet , View } from 'react-native';
import Formula1 from './formula1.js';

// Make a component
export default class Formula2 extends Component {




  render() {
    //<Formula1 input =
    return (

      <View style={styles.container}>
            <View>
              <Text style={styles.text1}>E_phasor= [ax(</Text>
            </View>
            <View>
            <TextInput style ={styles.line1}
              underlineColorAndroid = "black"
              onChangeText={this.handleChange}
              keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text4}>)∠(</Text>
            </View>
            <View>
            <TextInput style ={styles.line1}
              underlineColorAndroid = "black"
              onChangeText={this.handleChange}
              keyboardType="numeric"/>
            </View>
            <View>
              <Text style={styles.text2}>) + ay(</Text>
            </View>
            <View>
              <TextInput style ={styles.line1}
              underlineColorAndroid = "black"
              onChangeText={this.handleChange}
              keyboardType="numeric"/>
            </View>
            <View>
            <Text style={styles.text4}>)∠(</Text>
            </View>
            <View>
              <TextInput style ={styles.line1}
              underlineColorAndroid = "black"
              onChangeText={this.handleChange}
              keyboardType="numeric"
              />
            </View>
            <View>
              <Text style={styles.text1}>)]exp(-jBz)</Text>
            </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    text1: {
      width:65,
        fontSize : 10,
      },
    text3: {
        width:80,
          fontSize : 10,
      },
    text2: {
        width:30,
          fontSize : 10,
      },
    text4: {
        width:18,
        fontSize : 10,
      },
    line1:{
        width: 35,
        height: 35,
        fontSize : 10,
        paddingBottom : 10,
        textAlign: 'center'
      },

    container:{

        flexDirection: 'row',
        height: 35,
        justifyContent :'center',
        alignItems : 'center',
        marginTop:10

      }
  });
