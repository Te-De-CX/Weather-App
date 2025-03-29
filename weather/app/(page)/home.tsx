import { View, Text, SafeAreaView,TextInput, ImageBackground, TouchableHighlight } from 'react-native'
import {Background} from '@/utils/helpers/images'
import React from 'react'
import { Link, Stack } from 'expo-router';

export default function home() {
  const name = "User"

  return (
    <ImageBackground source={Background} resizeMode='cover' className='w-full h-full' >
        <SafeAreaView className='p-5 h-screen mt-10' >
          <View  className='text-black' >
            <Text className='text-4xl mb-5 text-gray-200 font-semibold  ' > Hello {name}</Text>
            <TextInput placeholder='seach any weather here' className='border-2 border-white text-xl  my-2 p-2  rounded-lg outline-none'/>
          </View>
          
                <Link href="/weather" className='flex justify-center items-center' >``
                  <Text className='text-white text-lg uppercase'>lets go</Text>
                </Link>
        </SafeAreaView>
        </ImageBackground>
  )
}

