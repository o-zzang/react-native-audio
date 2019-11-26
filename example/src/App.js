import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import usePermission from './usePermission';
import RecorderExample from './RecorderExample';
import PlayerExample from './PlayerExample';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  permissionText: {
    textAlign: 'center',
    margin: 8,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default function App() {
  const [permissionGranted, requestPermission] = usePermission();

  React.useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.permissionText}>
        {permissionGranted
          ? 'Audio Permission Granted :D'
          : 'Audio Permission Required ;('}
      </Text>
      <View style={styles.container}>
        <RecorderExample disabled={!permissionGranted} />
        <PlayerExample disabled={!permissionGranted} />
      </View>
    </SafeAreaView>
  );
}
