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
        name='file-upload-outline'
        color={'orange'}
        ios={{
          useMaterialIcon: type === 'Material Icon',
          // name: 'arrow.up.doc',
        }}
      />
      <Icon
        name='file-upload'
        color={'orange'}
        ios={{
          useMaterialIcon: type === 'Material Icon',
          // name: 'arrow.up.doc.fill',
        }}
      />
      <Icon
        name='file-download-outline'
        color={'orange'}
        ios={{
          useMaterialIcon: type === 'Material Icon',
          // name: 'arrow.down.doc',
        }}
      />
      <Icon
        name='file-download'
        color={'orange'}
        ios={{
          useMaterialIcon: type === 'Material Icon',
          // name: 'arrow.down.doc.fill',
        }}
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
