import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';

export default class ReadStoryScreen extends React.Component{
 constructor(){
     super();
     this.state={
         DBstories:[],
         search:[],
         searchResults:[]
     }
 }
 
 
 retieveStories=async=>{

var allStories =db.collection('stories').where('Title','!=','').get();
var allStoriesData=allStories.data();
this.setState({DBstories:allStoriesData});


 }
    
 searchFilter=async(searchInput)=>{
     if(searchInput!=''){
         var results=this.DBstories.where('Title','==',searchInput).get();
         var ResultsData=results.data()
         this.setState({searchResults:ResultsData})

     }else{
         this.setState({searchResults:this.state.DBstories});

     }
 }
 componentDidMount(){
     this.retrieveStories;
 }
 render(){
     return(
        <View style = {{flex: 1, backgroundColor:'#FFEFEF'}}>
        <Header
          backgroundColor={'#FF0038'}
          centerComponent={{
            text:'Story Hub',
            style:{color:'#EEE', fontSize:20, fontWeight:'bold'}
          }}
        />
          <View style = {{alignItems:'center'}}>
          <TextInput
            style = {styles.searchText}
            placeholder = "Search for a story title"
            onChangeText = {search=>{
              this.searchFilter(search);
              this.setState({search:search});
              console.log(this.state.search);
            }}
            value = {this.state.search}/>
          <ScrollView>
            {this.state.searchResults}
          </ScrollView>
        </View>
      </View>
     )
 }
}


const styles = StyleSheet.create({
    Story:{
        marginTop:45,
        justifyContent:'center',
        alignItems:'center',
        height:35,
        width:'70%',
        borderWidth:1.5,
        alignSelf:'center',
        fontSize:20,
        backgroundColor:'#FFF',
        margin:20
    }
})