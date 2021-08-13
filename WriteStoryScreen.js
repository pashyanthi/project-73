import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../Config';


export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
          title:'',
          authorName:'',
          story:''
        }
    }
    submitStory = async()=>{
      db.collection("stories").add({
        Title: this.state.title,
        AuthorName: this.state.authorName,
        Story: this.state.story
      });
      ToastAndroid.show('The Story is Submitted', ToastAndroid.SHORT);

      
    }
    
    render(){
        return(
       <KeyboardAvoidingView>
            <View>
              <Header
                    backgroundColor={'teal'}
                    centerComponent={{
                    text: 'My Story Hub',
                    style: { color: '#fff', fontSize: 20 },
                    }}
                />
                <Text style = {styles.text}>Title of the Book:- </Text>
                
                <TextInput
          style = {styles.inputBox}
          placeholder = "Title of the Story"
          onChangeText = {(text) => {this.setState({title:text})}}
          value = {this.state.title}
        />
                <TextInput
          style = {styles.inputBox}
          placeholder = "Author name"
          onChangeText = {(text) => {this.setState({authorName:text})}}
          value = {this.state.authorName}
        />
          <TextInput
          style = {styles.inputBox2}
          placeholder = "Write your story here"
          multiline = {true}
          onChangeText = {(text) => {this.setState({story:text})}}
          value = {this.state.story}
        />
          <TouchableOpacity
          style = {styles.submit}
          onPress = {()=>{this.submitStory()}}>
          <Text style = {styles.submitTextStyle}>SUBMIT</Text>
        </TouchableOpacity>

          
               
             
               
            </View>
             </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
 inputBox: {
             marginTop: 50,
             width: '80',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
           inputBox2: {
            marginTop: 20,
            width: '80',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
            
          },
          text:{
            color:'purple',
            fontSize:20,
          },
          text2:{
            color:'purple',
            fontSize:20,
          },
          submit:{
            justifyContent:'center',
            borderWidth:4,
            backgroundColor:'turquoise',
            marginTop:20,
            marginLeft:150,
            width:75,
            height:45,
          }
    
})






