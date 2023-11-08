import { View, Text, StyleSheet, Image } from "react-native"

export default function PostCard({ singlePost, index}) {
    return (
        <View style={styles.cardContainer}>
              <View style={styles.headerContainer}>
                <Image
                  style={styles.avatarImage}
                  source={{ uri: `https://randomuser.me/api/portraits/women/${index}.jpg` }}
                  width={40}
                  height={40} 
                  />
                  <Text> {singlePost.title} </Text>
              </View>
              <Image style={styles.image} source={{ uri: `https://source.unsplash.com/random/${index}` }} />
              <Text> {singlePost.content}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      marginVertical: 20,
      paddingVertical: 20,
      borderBottomColor: '#e5e4e2',
      borderBottomWidth: 1
    },
  
    headerContainer: {
      flexDirection: 'row',
      marginHorizontal: 20
    },
  
    avatarImage: {
      borderRadius: 100,
      marginRight: 20,
      width: 50,
      height: 50,
  
    },
    image: {
      flex: 1,
      aspectRatio: 1,
      width: '100%',
      marginVertical: 20
    },
  });
  