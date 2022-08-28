import React, { PureComponent } from 'react';
import { View, SafeAreaView, Image, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles, white } from '../assets/styles/Style';
import { ListItem, Avatar, Title, Subtitle } from 'react-native-elements';
import singer from '../assets/images/listen.jpeg';
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
AntIcon.loadFont();



const menu = [
  {
  "id" : 1,
  "title" : "The Stable Song",
  "artist": "Gregory Alan Isakov",
  "image" : "https://i.ytimg.com/vi/AqyAmmEkVvI/maxresdefault.jpg",
  "song"  : "require(../assets/audio/stable.mp3)"
},
{
  "id" : 2,
  "title" : "Up & Up",
  "artist": "Coldplay",
  "image" : 'https://i.ytimg.com/vi/BPNTC7uZYrI/maxresdefault.jpg',
  "song" :  'require(../assets/audio/up&up.mp3)'
},
{
  "id" : 3,
  "title" : "Peru",
  "artist": "Fireboy DML",
  "image" : "https://ichef.bbci.co.uk/news/976/cpsprodpb/146C5/production/_123035638_34036f17-f5a0-4019-bc6d-4d6b53583d53.jpg"
},
{
  "id" : 4,
  "title" : "O Fortuna",
  "artist": "Carl Off",
  "image" : "https://i1.sndcdn.com/artworks-000150521908-xm3ml4-t500x500.jpg"
},
{
  "id" : 5,
  "title" : "End of Night",
  "artist": "Dido",
  "image" : "https://upload.wikimedia.org/wikipedia/en/b/ba/EndofNightDido.jpg"
}
]

class Home extends PureComponent {

  ShowMenu = () => {
   return(
     <View>
     <FlatList
       showsVerticalScrollIndicator={false}
       data={menu}
       renderItem={this.renderMenuItem}
       keyExtractor={(item, index) => item.id.toString()}
     />
     </View>
   )
 }

  renderMenuItem = ({item}) => (
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Player',{
      id: item.id,
      title: item.title,
      artist: item.artist,
      image: item.image,
      song: item.song
    })}>
    <ListItem key={item.id} containerStyle={{ backgroundColor: '#0c091c' }}>
        <Avatar source={{uri: item.image}} />
        <ListItem.Content>
          <ListItem.Title style={{color: 'white'}}>{item.title}</ListItem.Title>
          <ListItem.Subtitle style={{color: 'white'}}>{item.artist}</ListItem.Subtitle>
        </ListItem.Content>
        <AntIcon
        name="heart"
        size={26}
        color="#575ad2"
        style={{position: 'relative'}}
          />
      </ListItem>
      </TouchableOpacity>

);

  render(){
    return(
      <SafeAreaView style={ styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={ styles.menuContainer}>
        <Text style={styles.titleText}>Music Player</Text>
        <Icon color={white} name="menu" size={27} onPress={()=> this.props.navigation.openDrawer()} />
        </View>
        <Image source={singer} style={styles.albumContainer} />

        <View style={ styles.songContainer }>
        <Text style={styles.playListText}>PLAYLIST</Text>
        <FlatList
         ListHeaderComponent ={ this.ShowMenu() }
     />
     </View>
      </SafeAreaView>
    )
  }
}

export default Home;
