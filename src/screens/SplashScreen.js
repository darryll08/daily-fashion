import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'

const SplashScreen = (props) => {
    const {navigation} = props

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Drawer')
        }, 3000)
    }, [])

  return (
    <View>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../assets/image/splash.png')}
      >
        <Image
            style={styles.image}
            source={require('../../assets/image/splash-text.png')}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
     },
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
     },
    image: {
        width: '100%',
        height: '150%',
        resizeMode: 'contain'
     }
    });
export default SplashScreen