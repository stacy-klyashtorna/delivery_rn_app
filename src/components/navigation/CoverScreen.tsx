import React from 'react';
import {Animated, Image, StyleSheet, View, Text} from 'react-native';

import {colors} from '../../constants/colors';

const logo = require('../../../assets/images/logo.png');
const background = require('../../../assets/images/background.jpeg');

export const CoverScreen: React.FunctionComponent<{opacity: any}> = ({
  opacity,
}) => (
  <Animated.View style={[styles.coverScreen, {opacity: opacity}]}>
    <Image source={background} style={(styles.image, {position: 'relative'})} />
    <View style={styles.logo}>
      <Image source={logo} style={[styles.image, styles.logoImg]} />
      <Text style={styles.text}>Food for Everyone</Text>
    </View>
  </Animated.View>
);

const styles = StyleSheet.create({
  coverScreen: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  logoImg: {
    maxWidth: 262,
    maxHeight: 262,
    top: '-10%',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.white,
    bottom: '35%',
    borderRadius: 500,
    borderColor: colors.white,
    borderWidth: 1,
  },
  text: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: '40%',
  },
});

export default CoverScreen;
