import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/AffirmationGallery';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';

export default function Affirmations() {
  return (
    <View className='flex-1'>
      <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='text-zinc-50 text-3xl font-bold'>
            Change your beliefs vith affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
}
