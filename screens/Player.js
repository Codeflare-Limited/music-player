import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, BackHandler, Image, View, Text } from 'react-native';
import { styles, white, primaryColor } from '../assets/styles/Style';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import singer from '../assets/images/stable.jpeg';
import { Capability } from 'react-native-track-player';
import {Appbar} from 'react-native-paper';
import TrackPlayer from 'react-native-track-player';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
AntIcon.loadFont();
FeatherIcon.loadFont();
FontAwesome.loadFont();
Icon.loadFont();

class Player extends PureComponent{

    constructor(props){
      super(props);
      this.state = {
        isSongPlaying: true,
        id:  this.props.navigation.state.params.id,
        title: this.props.navigation.state.params.title,
        image: this.props.navigation.state.params.image,
        artist: this.props.navigation.state.params.artist,
        song: this.props.navigation.state.params.song,
      }
    }

  updateCurrentChanelDetails = async () => {
   // TrackPlayer.reset()
   TrackPlayer.add({
     id: this.state.id,
     url: require('../assets/audio/stable.mp3'),
     title: 'Track Title',
     artist: 'Track Artist',
     artwork: this.state.image
   });
   TrackPlayer.play();
 };

   start = async () => {
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: this.state.id,
        url: require('../assets/audio/stable.mp3'),
        title: this.state.title,
        artist: this.state.artist,
        artwork: this.state.image
    });
    // Start playing it
    await TrackPlayer.play();
};

   pause = async () => {
    // Set up the player
    // await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: this.state.id,
        url: require('../assets/audio/stable.mp3'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: this.state.image
    });

    // Start playing it
    await TrackPlayer.pause();
};

  playPauseSong = () => {
    this.updateCurrentChanelDetails();
    if(this.state.isSongPlaying === true){
      this.setState({isSongPlaying: false});
      this.start();
    }else if(this.state.isSongPlaying === false){
      this.setState({isSongPlaying: true})
      this.pause();
    }
  };

componentDidMount(){
  TrackPlayer.reset();
  this.playPauseSong();
}

componentDidUpdate() {
  if (this.props.navigation.state.params.title === '') {
    this.setState({
      title: this.props.navigation.state.params.title,
    });
  }else if (this.props.navigation.state.params.image === '') {
    this.setState({
      image: this.props.navigation.state.params.image,
    });
  }else if (this.props.navigation.state.params.artist === '') {
    this.setState({
      artist: this.props.navigation.state.params.artist,
    });
  }else if (this.props.navigation.state.params.song === '') {
    this.setState({
      song: this.props.navigation.state.params.song,
    });
  }else if (this.props.navigation.state.params.id === '') {
    this.setState({
      id: this.props.navigation.state.params.id,
    });
  }
}

handleBackButtonClick() {
  this.props.navigation.goBack();
  TrackPlayer.stop();
  return true;
}

UNSAFE_componentWillMount() {
  BackHandler.addEventListener(
    'hardwareBackPress',
    this.handleBackButtonClick,
  );
}

UNSAFE_componentWillUnmount() {
  BackHandler.removeEventListener(
    'hardwareBackPress',
    this.handleBackButtonClick,
  );
}


  goBackButton = () => {
    if(TrackPlayer.play()){
        this.updateCurrentChanelDetails();
    TrackPlayer.pause()
  }
    this.props.navigation.navigate('Home')
  }


  render(){
    const { song, id, title, image, artist } = this.state;
    return(
      <LinearGradient colors={['#1d2361', '#232336', '#0c091c']} style={ styles.container}>
      <Appbar.Header style={{backgroundColor: primaryColor, elevation: 1}}>
          <Appbar.Action
            icon="keyboard-backspace"
            onPress={() => this.goBackButton()}
          />
          <Appbar.Content title={this.state.title} titleStyle={{fontSize: 19}} />
        </Appbar.Header>
      <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.playContainer}>
      <Image source={{uri: image}} style={ styles.image} />
      </View>
      <View style={ styles.songTitleContainer}>
      <Text style={ styles.songTile }>{title}</Text>
      <AntIcon
      name="heart"
      size={26}
      color="#575ad2"
      style={{position: 'relative'}}
      />
      </View>
      <View style={ styles.artistTitle }>
      <Text style={ styles.artistTitle }>{artist}</Text>
      </View>
      <View style={ styles.controlContainer}>
      <FeatherIcon
      name="shuffle"
      size={26}
      color="#575ad2"
      style={{position: 'relative'}}
      />
      <AntIcon
      name="banckward"
      size={26}
      color="#575ad2"
      style={{position: 'relative'}}
      />
      <TouchableOpacity onPress={() => this.playPauseSong()}>
      <AntIcon
      name={!this.state.isSongPlaying ? "pausecircle" : "play"}
      size={54}
      color="#575ad2"
      style={{position: 'relative'}}
      />
      </TouchableOpacity>
      <AntIcon
      name="forward"
      size={26}
      color="#575ad2"
      style={{position: 'relative'}}
      />
      <FeatherIcon
      name="repeat"
      size={26}
      color="#575ad2"
      style={{position: 'relative'}}
      />

      </View>
      </SafeAreaView>
      </LinearGradient>
    )
  }
}

export default Player
