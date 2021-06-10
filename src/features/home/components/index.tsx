import React from 'react';
import {Image, StyleSheet, Dimensions, Text, View} from 'react-native';

import Screen from '../../../components/Layout';
import {colors} from '../../../constants/colors';

const logo = require('../../../../assets/images/logo.png');

const HomeScreen: React.FunctionComponent = () => {
  return (
    <Screen>
      <Image
        source={logo}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.text}>
        <Text>HOME SCREEN</Text>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const w = Dimensions.get('screen');

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    backgroundColor: colors.white,
    height: w.height,
    width: w.width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: colors.white,
    borderWidth: 1,
  },
  text: {
    position: 'absolute',
    top: '70%',
    left: '40%',
  },
});
