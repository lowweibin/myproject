import React, {Component,label} from 'react';
import { Text , TextInput , StyleSheet , View } from 'react-native';

// Make a component
export default class formula2 extends Component {

  render(){
    return (
      <View style={styles1.container1}>
          <View>
            <Text style={styles1.text11}>E_phasor= [ax(</Text>
          </View>
          <View>
            <TextInput style ={styles11.line}
            underlineColorAndroid = "black"
            onChangeText={this.handleChange}
            value={this.state.value} />
          </View>
          <View>
          <View>
            <Text style={styles1.text11}>)angle(</Text>
          </View>
          <View>
            <TextInput style ={styles1.line1}
            underlineColorAndroid = "black"
            onChangeText={this.handleChange}
            value={this.state.value} />
          </View>
          <View>
            <Text style={styles1.text11}>) + ay(</Text>
          </View>
          <View>
            <TextInput style ={styles1.line1}
            underlineColorAndroid = "black"
            onChangeText={this.handleChange}
            value={this.state.value} />
          </View>
          <View>
            <Text style={styles1.text11}>)angle(</Text>
          </View>

        </View>

        );
      }
    }



const styles1 = StyleSheet.create({

  text11:{
    width:20
  },
    text12:{
      width:80
  },
    text13:{
      width:43
  },
    line11:{
      width: 35,
      height: 35,
      fontSize : 10,
      paddingBottom : 10,
      textAlign: 'center'

    },

    container1:{
      flex:1,
      flexDirection: 'row',

      justifyContent :'center',
      alignItems : 'center'

    }
            });
