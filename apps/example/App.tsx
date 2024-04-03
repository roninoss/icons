import 'expo-dev-client';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@roninoss/icons';
import * as React from 'react';

export default function Native() {
  const [type, setType] = React.useState('iOS Icon');
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setType(type === 'iOS Icon' ? 'Material Icon' : 'iOS Icon');
        }}
      >
        <Text style={styles.header}>{type}</Text>
      </Pressable>

      <Icon
        name='arrow-up-box'
        color={'orange'}
        ios={{
          name: 'sun.max.fill',
          colors: ['orange'],
          symbolEffect: {
            type: 'pulse',
            isActive: true,
            repeat: true,
            speed: 2,
          },
        }}
      />
      <Icon
        name='trash-can-outline'
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        color={'orange'}
        materialIcon={{ type: 'MaterialCommunityIcons', name: 'delete' }}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='trash-can'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='delete-circle-outline'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='delete-circle'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='delete-off-outline'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='delete-off'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='restore-from-trash'
        color={'orange'}
      />
      <Icon
        ios={{ useMaterialIcon: type === 'Material Icon' }}
        name='folder-open'
        color={'orange'}
      />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
});
