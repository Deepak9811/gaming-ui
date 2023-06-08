import React from 'react';
import {Text, View} from 'react-native';

const GameDetailsScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Game Details Screen</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
        {route.params?.title}
      </Text>
    </View>
  );
};

export default GameDetailsScreen;
