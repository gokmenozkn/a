import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';

import { MEDITATION_DATA, MeditationType } from '@/constants/MeditationData';
import MeditationImages from '@/constants/MeditationImages';
import { LinearGradient } from 'expo-linear-gradient';

const NatureMeditate = () => {
  const renderItem: ListRenderItem<MeditationType> = ({ item }) => (
    <Pressable
      onPress={() => console.log('Press')}
      className='h-48 my-3 rounded-md overflow-hidden'
    >
      <ImageBackground
        source={MeditationImages[item.id - 1]}
        resizeMode='cover'
        className='flex-1 rounded-lg justify-center'
      >
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          className='flex-1 justify-center items-center'
        >
          <Text className='text-gray-100 text-3xl font-bold text-center'>
            {item.title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );

  return (
    <View className='flex-1'>
      <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
        <View className='mb-6'>
          <Text className='text-gray-200 mb-3 font-bold text-4xl text-left'>
            Welcome Yarram
          </Text>
          <Text className='text-indigo-100 mb-3 font-medium text-xl text-left'>
            Start your meditation!
          </Text>
        </View>

        <View>
          <FlatList
            data={MEDITATION_DATA}
            className='mb-20'
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default NatureMeditate;
