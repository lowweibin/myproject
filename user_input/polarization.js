import React, {Component} from 'react';
import { Text , TextInput , StyleSheet , View , Button} from 'react-native';
import Formula1 from './formula1.js';

// Make a component
export default class Polarization extends Component {

handleEvent= () => {alert("hello")}

render() {
  return (


          <Button style= {styles.footer}
            onPress={this.handleEvent}
            title="Enter"
          />


    );
  }
}


const styles = StyleSheet.create({
  footer: {
 position: 'absolute',
 flex:0.1,
 left: 0,
 right: 0,
 bottom: -10,
 backgroundColor:'green',
 flexDirection:'row',
 height:80,
 alignItems:'center',
}
});
