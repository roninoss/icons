// @refresh reset

import 'expo-dev-client';

import { ICON_MAPPING, Icon } from '@roninoss/icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = Object.keys(ICON_MAPPING).map(
  (name) => name
) as (keyof typeof ICON_MAPPING)[];

export default function Screen() {
  const [type, setType] = React.useState('Sf Symbol');
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setType(type === 'Sf Symbol' ? 'Material Icon' : 'Sf Symbol');
        }}
        style={{
          paddingTop: 60,
          marginBottom: 20,
          backgroundColor: '#FFFFFFEE',
          zIndex: 100,
        }}
      >
        <Text style={styles.header}>{type}</Text>
        <Text style={{ textAlign: 'center', fontSize: 14, opacity: 0.8 }}>
          {`Tap to change ${Platform.OS === 'ios' ? 'type' : 'naming scheme'}`}
        </Text>
      </Pressable>
      <FlatList
        extraData={data}
        keyExtractor={(item) => item}
        numColumns={4}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              padding: 4,
            }}
          >
            <Icon
              name={item}
              color={'orange'}
              size={42}
              ios={{ useMaterialIcon: type === 'Material Icon' }}
            />
            <View style={{ height: 18, flex: 1 }}>
              <Text
                numberOfLines={2}
                style={{ textAlign: 'center', fontSize: 12, color: 'orange' }}
              >
                {type === 'Material Icon' ? item : ICON_MAPPING[item].sfSymbol}
              </Text>
            </View>
          </View>
        )}
        style={{
          overflow: 'visible',
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
    gap: 12,
  },
  header: {
    fontWeight: 'bold',

    fontSize: 36,
    marginTop: 20,
    textAlign: 'center',
  },
});
