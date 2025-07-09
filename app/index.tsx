import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
// import images from '@contrains/Images'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/ns-background-2.jpg')} 
        style={styles.image}>
      <ThemedText type="title">Welcome to</ThemedText>
      <Text style={styles.title}>Skip Traps</Text>
      <ThemedText type="subtitle" style={styles.descriptionText}>Easy guide for Nova Scotia new comers</ThemedText>
      {/* <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
      </Link> */}
      <Link href="/menu" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
        </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 20,
  },
  link: {
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    // marginTop: 200,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    // marginTop: 200,
  },
  descriptionText: {
    marginBottom: 100,
    textAlign: 'center',

  }
})