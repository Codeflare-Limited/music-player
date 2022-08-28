import { StyleSheet } from 'react-native';
const primaryColor = "#0c091c"
const white = "#fff"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: primaryColor
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18
  },
  albumContainer: {
  width: 405,
  height: 270,
},
image:{
  width: 270,
  height: 270,
  borderRadius: 270,
},
playContainer:{
  alignSelf: 'center',
  marginTop: 45,
  borderWidth: 9,
  borderRadius: 270,
  borderColor: '#096f54',
  borderTopColor: 'red',
  borderRightColor: 'orange',
  borderLeftColor: 'yellow',
  borderBottomColor: 'green',
  borderTopLeftRadius: 270,
},
songTitleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 18,
  marginTop: 45
},
songContainer: {
  marginTop: 36,
  padding: 9
},
playListText: {
  color: white,
  fontSize: 21,
  marginBottom: 9,
  marginLeft: 13
},
 titleText:{
   color: white,
   fontSize: 21
 },
 songTile:{
   fontSize: 23,
   color: white,
   fontWeight: 'bold'
 },
 artistTitle: {
   fontSize: 18,
   color: white,
   marginLeft: 9
 },
 controlContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-evenly',
   marginTop: 45,
   height: 263,
   backgroundColor: '#e1e1e12e',
   borderTopLeftRadius: 80,
   borderTopRightRadius: 80,
 },
 header: {
   backgroundColor: '#e1e1e12e',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
 }

});

export { styles, white, primaryColor }
