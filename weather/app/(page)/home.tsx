import { View, Text, SafeAreaView,TextInput, ImageBackground } from 'react-native'
import {Background} from '@/utils/helpers/images'
import React from 'react'
import { Image } from 'react-native'

export default function Home() {

  const [state,setstate] = React.useState("")
  const ref = React.useRef()

  const name = "User"

  return (
        <SafeAreaView className='p-5 bg-blue-900 h-screen ' >
          <View  className='text-black' >
            <Text className='text-2xl text-gray-200 font-semibold  ' > Hello {state.toUpperCase()}</Text>
            <TextInput placeholder='seach any weather here' className='border-2 border-white text-xl  my-2 p-2  rounded-lg outline-none' value={state} onChange={(e) => setstate(e.target.value)} />
              <Image source={Background} width={12} height={12} className='w-12 h-12'/>
          </View>
        </SafeAreaView>
  )
}

