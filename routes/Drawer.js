import React, { PureComponent } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Image, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { primaryColor, white } from '../assets/styles/Style';
import Icon from 'react-native-vector-icons/Entypo';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import black from '../assets/images/listen_music.jpeg';
import fav from '../assets/images/fav.png';
import HomeScreen from '../screens/Home';
import PlayerScreen from '../screens/Player';
Icon.loadFont();
FontIcon.loadFont();

class Drawer extends PureComponent{
  render(){
    return <AppContainer />
  }
}

 const CustomDrawerContentComponent = (props)=>(
   <View style={{flex:1, backgroundColor: white}}>
     <SafeAreaView style={{ backgroundColor: white}}>
       <View style={{justifyContent:'center', height:270}}>
        <ImageBackground source={black} style={styles.backgroundContainer}/>
       </View>
       <View>
        <DrawerItems {...props} style={{ color: white}} />
       </View>
     </SafeAreaView>
   </View>
 )

 const DrawerNavigator = createDrawerNavigator({
   Home:{
     screen:HomeScreen,
     navigationOptions:{
       drawerIcon: (
         <Icon name="home" size={24} color={primaryColor} />
       ),
     },
   },
   About:{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="info" size={24} color={primaryColor} />
      ),
    },
  },

  Playlist:{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="folder-music" size={24} color={primaryColor} />
      ),
    },
  },

  'Play History':{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon: (
        <FontIcon name="history" size={24} color={primaryColor} />
      ),
    },
  },

  Settings:{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="cog" size={24} color={primaryColor} />
      ),
    },
  },

 },{
   initialRouteName: 'Home',
   contentComponent: CustomDrawerContentComponent,
   drawerPosition: 'right',
   drawerOpenRoute: 'DrawerOpen',
   drawerCloseRoute: 'DrawerClose',
   drawerToggleRoute: 'DrawerToggle',
   activeColor: primaryColor,
   inactiveColor: white,
 })

 const AuthStack = createSwitchNavigator(
   {
     Home: {
       screen: DrawerNavigator,
       navigationOptions: {
         headerShown: false,
       },
     },

     Player: {
       screen: PlayerScreen,
       navigationOptions: {},
     },
   },
   {
     initialRouteName: 'Home',
   },
 );


 const AppContainer = createAppContainer(AuthStack)

 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor: primaryColor
   },
   backgroundContainer:{
     flex:1,
     position: 'absolute',
     top:0,
     left:0,
     right:0,
     bottom:0,
     alignItems:'center'
   },
   drawerImage:{
     height:50,
     width:50,
     alignSelf:'center'
   },
   imageText:{
     alignSelf:'center',
     color: '#fff',
     padding:10,
     fontWeight: 'bold',
     fontStyle: 'italic'
   }
 });

export default Drawer;
