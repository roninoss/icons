import 'expo-dev-client';

import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@roninoss/icons';

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>

      <Icon name='lasso' color={'orange'} />
      <Icon name='trash-can-outline' color={'orange'} />
      <Icon name='trash-can' color={'orange'} />
      <Icon name='delete-circle-outline' color={'orange'} />
      <Icon name='delete-circle' color={'orange'} />
      <Icon name='delete-off-outline' color={'orange'} />
      <Icon name='delete-off' color={'orange'} />
      <Icon name='restore-from-trash' color={'orange'} />
      <Icon name='folder-open' color={'orange'} />

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
