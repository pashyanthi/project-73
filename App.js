import *as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default class App extends React.Component{
   render(){
    return (
    <SafeAreaProvider>
      <AppContainer/>
      </SafeAreaProvider>
    
   );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  ReadStory:{screen:ReadStoryScreen},
  WriteStory:{screen:WriteStoryScreen},
},
{defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "ReadStory"){
      return(
        <Image
        source={require("./assets/read.png")}
        style={{width:35, height:35}}
       />
      )
      
    }
    else if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/write.png")}
        style={{width:35, height:35}}
       />
      )
      
    }
  }
})
}
);
const AppContainer = createAppContainer(TabNavigator);

