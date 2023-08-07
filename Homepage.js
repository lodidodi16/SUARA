;import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile'; // Import the Profile component from the "file"

const recentlyPlayedSongs = [
  {
    id: '1',
    title: 'ATEEZ',
    artist: 'SAN',
    albumImage: 'https://images.genius.com/81c5e51cf756ec31e408db4c50e6a90d.1000x1000x1.jpg',
  },
  {
    id: '4',
    title: 'G-iDLE',
    artist: 'MIYEON',
    albumImage: 'https://upload.wikimedia.org/wikipedia/en/c/c7/GIDLE_OMG_C.jpeg',
  },
   {
    id: '5',
    title: 'STRAY KIDS',
    artist: 'BANG CHAN',
    albumImage: 'https://images.genius.com/5969d635ce6eb8f51b1da79d7140cfcd.1000x1000x1.jpg',
  },
   {
    id: '6',
    title: 'TREASURE',
    artist: 'ASAHI',
    albumImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqfnTcWtwiIivigpEmb1HCvRepLwzhUU207GkyrDSey_oywHKx',
  },
  // Add more recently played songs here
];

const renderArtistItem = ({ item }) => <ArtistItem artist={item} />;

const recommendedArtist = [
  {
    id: '1',
    name: 'IVE',
    image: 'https://pbs.twimg.com/media/Fz2xNybaEAEaUdc?format=jpg&name=4096x4096',
},
{
    id: '1',
    name: 'ENHYPEN',
    image: 'https://koreajoongangdaily.joins.com/data/photo/2023/07/03/d251246c-ff4d-41ca-9e16-68535c088cbe.jpg',
},
{
    id: '1',
    name: 'Dua Lipa',
    image: 'https://i.scdn.co/image/ab67616d00001e02d4daf28d55fe4197ede848be',
},
{
    id: '1',
    name: 'Billie Eilish',
    image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/06/21/16558479943696.jpg',
},
{
    id: '1',
    name: 'LE SSERAFIM',
    image: 'https://1409791524.rsc.cdn77.org/data/images/full/611365/le-sserafim-fearless.jpg?w=600?w=430',
},
];

const songs = [
  {
    id: '1',
    title: '2ND FULL ALBUM "REBOOT ',
    artist: 'Album : TREASURE',
    albumImage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqfnTcWtwiIivigpEmb1HCvRepLwzhUU207GkyrDSey_oywHKx',
  },
  {
    id: '2',
    title: 'SUPER UNHEALTHY (VOICENOTE EDITION)',
    artist: 'Album : Anne Marie',
    albumImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/23/95/31/23953195-d71a-0e28-ac19-3b1014e72a3a/5054197751738.jpg/1200x1200bb.jpg',
  },
    {
    id: '2',
    title: 'Imagine Dragons (Live in Vegas)',
    artist: 'Album : Imagine Dragons',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273de6d776a57b267164a9f358b',
  },
    {
    id: '2',
    title: 'The Loveliest Time',
    artist: 'Album : Carly Rae Jepson',
    albumImage: 'https://media.pitchfork.com/photos/64bee93d08cb381a6cdf7a5f/1:1/w_600/Carly%20Rae%20Jepsen-%20The%20Loveliest%20Time.jpg',
  },
    {
    id: '2',
    title: 'Soulja World 3',
    artist: 'AAlbum : Soulja Boy',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273a9394b403281809dd554bb11',
  },
    {
    id: '2',
    title: 'KILL MY DOUBT',
    artist: 'EP : ITZY',
    albumImage: 'https://dbkpop.com/wp-content/uploads/2023/07/itzy_kill_my_doubt_teaser_all_group_1.jpg',
  },
    {
    id: '2',
    title: 'Paradise Again: The Live Album',
    artist: 'Album : Swedish House Mafia',
    albumImage: 'https://i.scdn.co/image/ab67616d0000b273c2b7e47602eb846dfec7fd3c',
  },
  // Add more songs here
];

const ArtistItem = ({ artist }) => (
  <TouchableOpacity style={styles.artistContainer} onPress={() => console.log('Artist ${artist.name} clicked')}>
  <Image style={styles.artistImage} source={{ uri: artist.image}} />
  <Text style={styles.artistName}>{artist.name}</Text>
  </TouchableOpacity>
)


const SpotifyUI = () => {
  const [showProfile, setShowProfile] = useState(false);

    const [showRecentlyPlayed, setShowRecentlyPlayed] = useState(false);
   const [showRecommendedArtists, setShowRecommendedArtists] = useState(false);

  const toggleRecommendedArtists = () => {
    setShowRecommendedArtists(!showRecommendedArtists);
  };
  const renderSongItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log('Song clicked:', item.title)}>
      <View style={styles.songContainer}>
        <Image style={styles.albumImage} source={{ uri: item.albumImage }} />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songArtist}>{item.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/XCbDPtH/Blue-Gradient-Login-Page-Wireframe-Mobile-Prototype.jpg' }} // Replace with your actual image URL
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Icon name="" size={30} color="#1DB954" />
          <Text style={styles.headerTitle}>SOUND</Text>
        </View>

         {/* Recently Played Section */}
      {showRecentlyPlayed && (
        <View style={styles.recentlyPlayed}>
          <Text style={styles.sectionTitle}>Recently Watched</Text>
          <FlatList
            data={recentlyPlayedSongs}
            renderItem={renderSongItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}

      {/* Profile Section */}
        {showProfile && (
          <View style={styles.profile}>
            <Text style={styles.sectionTitle}>Profile</Text>
            {/* Add profile content here */}
          </View>
        )}

        {/* Recommended Artists */}
      {showRecommendedArtists && (
        <SafeAreaView style={styles.recommendedArtists}>
          <Text style={styles.recommendedTitle}>Chat</Text>
          <FlatList
            data={recommendedArtist}
            renderItem={renderArtistItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      )}

         {/* Big Picture Section */}
        <View style={styles.bigPictureContainer}>
          <Image
            source={{ uri: 'https://i.ytimg.com/vi/X-uJtV8ScYk/maxresdefault.jpg' }} // Replace with your actual image URL
            style={styles.bigPicture}
          />
        </View>

        {/* Song List */}
        <View style={styles.songsList}>
          <Text style={styles.sectionTitle}>ARTISTS</Text>
          <FlatList
            data={songs}
            renderItem={renderSongItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Bottom Tab Navigation */}
        <View style={styles.tabBar}>
  <TouchableOpacity onPress={() => console.log('Home clicked')}>
    <Ionicons name="ios-home" size={25} color="#fff" />
  </TouchableOpacity>
  <TouchableOpacity onPress={toggleRecommendedArtists}>
        <Ionicons name="ios-chatbubble" size={25} color="#fff" />
      </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log('Live clicked')}>
    <Ionicons name="ios-radio" size={35} color="#fff" />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setShowRecentlyPlayed(!showRecentlyPlayed)}>
        <Ionicons name="ios-musical-notes" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowProfile(true)}>
          <Ionicons name="ios-person" size={25} color="#fff" />
        </TouchableOpacity>
</View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', // Make sure the image covers the entire screen
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  recentlyPlayed: {
    backgroundColor: '#333', // Set background color to transparent
    marginBottom: 10,
    borderRadius: 50,
    padding: 1,
    alignItems: 'center',
  },
  songsList: {
    backgroundColor: 'transparent', // Set background color to transparent
    borderRadius: 8,
    padding: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#fff',
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#222',
  },
  albumImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  songArtist: {
    fontSize: 14,
    color: '#eee',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },

  recommendedArtist: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  artistContainer: {
    marginRight: 30,
    marginBottom: 20,
    alignItems: 'center'
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
  },
  artistName: {
    marginTop: 5,
    color: '#444',
  },
bigPictureContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  bigPictureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  bigPicture: {
    width: 450,
    height: 250,
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
  },
});

export default SpotifyUI;
