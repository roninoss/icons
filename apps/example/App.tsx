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
        ListHeaderComponent={
          <Pressable
            onPress={() => {
              setType(type === 'iOS Icon' ? 'Material Icon' : 'iOS Icon');
            }}
          >
            <Text style={styles.header}>{type}</Text>
          </Pressable>
        }
        numColumns={6}
        data={data}
        // ItemSeparatorComponent={() => <View style={{ padding: 12 }} />}
        renderItem={({ item }) => (
          <Icon
            name={item}
            color={'orange'}
            size={42}
            ios={{
              useMaterialIcon: type === 'Material Icon',
              // name: item,
            }}
          />
        )}
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
    paddingTop: 60,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 36,
  },
});
