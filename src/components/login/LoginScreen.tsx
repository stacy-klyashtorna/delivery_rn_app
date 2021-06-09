import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';

import {colors} from '../../constants/colors';
// import {Button} from '../common/Button';

const logo = require('../../../assets/images/logo.png');

const LoginScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      {/* <Button onPress={() => console.log('Press')}>
        <Text style={{color: colors.black}}>Log in</Text>
      </Button> */}
    </View>
  );
};

export default LoginScreen;

const w = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    backgroundColor: colors.white,
    height: w.height / 3,
    width: w.width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    borderColor: colors.white,
    borderWidth: 1,
  },
  header: {
    color: colors.white,
  },
});
