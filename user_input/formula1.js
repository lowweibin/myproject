import React, {Component} from 'react';
import { Text , TextInput , StyleSheet , View , Button } from 'react-native';


// Make a component
export default class Formula1 extends Component {


  constructor(props) {
      super(props);
    this.state = { text1: '' } ;
    this.state ={ text2: ''};
    this.state={text3:''}


  }
handleChangeax = (ax) => {
  this.setState({ text1: ax })
  }

handleChangephase = (phase) => {
  this.setState({text2: phase})
  }

handleChangeay = (ay) => {
  this.setState({text3: ay})
  }

handleEvent= () => {alert("hello")}

//getValue = (value) => {
//  alert('hello' + value)
//}

render(){
  return (


  <View style={styles.container}>
        <View>
          <Text style={styles.text1}>ax(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          name="value of ax"
          keyboardType="numeric"
          underlineColorAndroid = "black"
          onChangeText={this.handleChangeax}
          value={this.state.text1}/>
        </View>
        <View>
          <Text style={styles.text2}>)cos[wt-Bz+(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          name="value of phase"
          keyboardType="numeric"
          underlineColorAndroid = "black"
          onChangeText={this.handleChangephase}
          value={this.state.text2}/>
        </View>


        <View>
          <Text style={styles.text3}>)] + ay(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          name="value of ay"
          keyboardType="numeric"
          underlineColorAndroid = "black"
          onChangeText={this.handleChangeay}
          value3={this.state.text3}/>
        </View>
        <View>
            <Text style={styles.text2}>)cos[wt-Bz+(</Text>
        </View>
        <View>
        <TextInput style ={styles.line1}
        name="value of phase"
        keyboardType="numeric"
        underlineColorAndroid = "black"
        value={this.state.text2}/>

        </View>

        <View>
            <Text style={styles.text1}>)]</Text>
        </View>

        <View>
        <Button
          onPress={this.handleEvent}
          title="Enter"/>
        </View>

  </View>

    );
  }
}


const styles = StyleSheet.create({
  text1: {
    width:15,
      fontSize : 11,
    },
    text2: {
      width:63,
        fontSize : 11,
    },
    text3: {
      width:35,
        fontSize : 11,
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
      alignItems : 'center'

    }
  });
