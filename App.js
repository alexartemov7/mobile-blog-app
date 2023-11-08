import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';
import PostCard from './components/PostCard';

export default function App() {
  const [blogPosts, setBlogPosts] = useState([])
  //useEffect is being called on different lifecycles of the component
  // 1. When component mounts
  // 2. When component unmounts

  const handleFetchData = () => {
    // console.log('fetching data')

  }
  useEffect(() => {
    fetch('http://192.168.10.239:8080')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => console.error(err))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View>
      <ScrollView>
        {blogPosts.map((singlePost, index) => {
          console.log(singlePost)
          return (
            <PostCard singlePost={singlePost} index={index} key={singlePost._id}/>
          )
        })}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})