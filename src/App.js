import React from 'react';

import {SafeAreaView, Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import music_data from './music_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={music_data}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex:1},
});

export default App;
