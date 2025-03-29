import { View, Text, SafeAreaView, ImageBackground, Image, TextProps } from 'react-native';
import { Cloudy, Cloud } from '@/utils/helpers/images';
import React from 'react';

interface WeatherTextProps extends TextProps {
  size?: 'xl' | '2xl' | '8xl' | 'md' | 'lg';
  extraClasses?: string;
  children: React.ReactNode;
}

const WeatherText = ({ children, size = 'md', extraClasses = '', ...props }: WeatherTextProps) => (
  <Text 
    className={`text-[#F6C8A4] mb-2 font-semibold text-center 
      ${size === 'xl' ? 'text-4xl' : ''}
      ${size === '2xl' ? 'text-5xl' : ''}
      ${size === '8xl' ? 'text-8xl' : ''}
      ${size === 'md' ? 'text-md' : ''}
      ${size === 'lg' ? 'text-2xl' : ''}
      ${extraClasses}`}
    {...props}
  >
    {children}
  </Text>
);

export default function Weather() {
    
  const name = "Weather";
  const currentTemp = "25°";
  const location = "California, Los Angeles";
  const date = "21 Oct 2023";
  const conditions = "Feels like 28°  |  Sunset 18:20";

  return (
    <ImageBackground 
      source={Cloudy} 
      resizeMode='cover' 
      className='flex-1'
    >
      <SafeAreaView className='mt-10 flex-1'>
        <View className='p-5 flex-1 justify-center'>
          <View className='bg-[#AC736A]/90 rounded-2xl py-5 px-7'>
            <WeatherText size="xl">Today</WeatherText>
            
            <View className='items-end gap-3 my-4 flex-row justify-center'>
              <Image 
                source={Cloud} 
                className='w-32 h-32' 
                resizeMode='contain'
              />
              <WeatherText size="8xl">{currentTemp}</WeatherText>
            </View>
            
            <WeatherText size="lg">Cloudy</WeatherText>
            
            <View className='mt-4'>
              <WeatherText>{location}</WeatherText>
              <WeatherText>{date}</WeatherText>
              <WeatherText>{conditions}</WeatherText>
            </View>
          </View>
          <View className='bg-[#AC736A]/90 rounded-2xl py-5 px-7 mt-5'>
            <WeatherText size="lg">5-Day Forecast</WeatherText>
            <View className='flex-row justify-between mt-3'>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <View key={day} className='items-center'>
                  <WeatherText size="md">{day}</WeatherText>
                  <Image source={Cloud} className='w-6 h-4 mt-1' />
                  <WeatherText size="md">24°</WeatherText>
                </View>
              ))}
            </View>
            <View style={{ 
                borderBottomColor: '#F6C8A4', 
                borderBottomWidth: 1,
                marginVertical: 10,
                opacity: 0.5
                }} />
            <View className='flex-row justify-between mt-3'>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <View key={day} className='items-center'>
                  <WeatherText size="md">{day}</WeatherText>
                  <Image source={Cloud} className='w-6 h-4 mt-1' />
                  <WeatherText size="md">24°</WeatherText>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View>
            <Text className='text-xl' >
                Random Text
            </Text>
            <Text>
                Improve him believe opinion offered met and end cheered forbade. Friendly as stronger speedily by recurred. Son interest wandered sir addition end say. Manners beloved affixed spicture men ask.
            </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}