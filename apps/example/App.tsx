// @refresh reset

import 'expo-dev-client';

import { ICON_NAMES, Icon } from '@roninoss/icons';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const data = Object.keys(ICON_NAMES).map((name) => name);
data.reverse();
export default function Native() {
  const [type, setType] = React.useState('iOS Icon');
  return (
    <View style={styles.container}>
      <FlatList
        extraData={data}
        keyExtractor={(item) => item}
        ListHeaderComponent={
          <Pressable
            onPress={() => {
              setType(type === 'iOS Icon' ? 'Material Icon' : 'iOS Icon');
            }}
          >
            <Text style={styles.header}>{type}</Text>
          </Pressable>
        }
        numColumns={9}
        data={data}
        renderItem={({ item }) => (
          <Icon
            name={item}
            color={'orange'}
            size={42}
            ios={{
              useMaterialIcon: type === 'Material Icon',
              // name: 'left',
            }}
          />
        )}
        contentContainerStyle={{
          paddingTop: 60,
        }}
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
    alignItems: 'center',
    gap: 12,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
    marginTop: 60,
  },
});
