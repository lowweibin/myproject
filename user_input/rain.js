/*<TextInput
    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
  />
  */
//{Colors.black}
//import libraries for making a component
import React, {Component,label} from 'react';
import { Text , TextInput , StyleSheet , View } from 'react-native';

// Make a component
export default class Inputs extends Component {
  //state = {
  //  my_input: ''
  //}

  constructor(props) {
      super(props);
      this.state = {value};

      this.handleChange = this.handleChange.bind(this);

  }
handleChange = (event) => {
  this.setState({value : text })
  }
/*getValue = (my_input) => {
  alert('input: ' + my_input)
}*/

render(){
  return (



        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}   underlineColorAndroid = "black"/>

        </label>
    );
  }
}
/*  <Text 'email' + {<TextInput
    underlineColorAndroid = "black"
    onChangeText={this.handleValue} />  } + 'hello'</Text>
*/

//  E(t)= ax()cos[wt-Bz + ()] + ay()cos[wt-Bz+()]
  //  <Text style= {styles.wording}></Text>


const styles = StyleSheet.create({
  wording:{
    fontSize : 10
  },
  label:{
    margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  }

})
