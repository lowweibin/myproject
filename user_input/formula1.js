/*<TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
  />
  */
//{Colors.black}
//import libraries for making a component
import React, {Component} from 'react';
import { Text , TextInput , StyleSheet , View } from 'react-native';

// Make a component
export default class Inputs extends Component {


  constructor(props) {
      super(props);
      this.state = {value:''};

  }
handleChange = (text) => {
  this.setState({value : text })
  }


render(){
  return (


  <View style={styles.container}>
        <View>
          <Text style={styles.text1}>ax(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          underlineColorAndroid = "black"
          onChangeText={this.handleChange}
          value={this.state.value} />
        </View>
        <View>
          <Text style={styles.text2}>)cos[wt-Bz+(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          underlineColorAndroid = "black"
          onChangeText={this.handleChange}
          value={this.state.value} />
        </View>
        <View>
          <Text style={styles.text3}>)] + ay(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          underlineColorAndroid = "black"
          onChangeText={this.handleChange}
          value={this.state.value} />
        </View>
        <View>
            <Text style={styles.text2}>)cos[wt-Bz+(</Text>
        </View>
        <View>
          <TextInput style ={styles.line1}
          underlineColorAndroid = "black"
          onChangeText={this.handleChange}
          value={this.state.value} />
        </View>
        <View>
            <Text style={styles.text1}>)]</Text>
        </View>



  </View>

    );
  }
}


const styles = StyleSheet.create({
  text1:{
    width:20
    },
    text2:{
      width:80
    },
    text3:{
      width:43
    },
    line1:{
      width: 35,
      height: 35,
      fontSize : 10,
      paddingBottom : 10,
      textAlign: 'center'

    },

    container:{
      flex:1,
      flexDirection: 'row',

      justifyContent :'center',
      alignItems : 'center'

    }
  });
