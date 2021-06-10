import React from 'react';
import {Image, StyleSheet, View, Dimensions, Text} from 'react-native';

import Screen from '../../../components/Layout';
import {Button} from '../../../components/Button';

import {colors} from '../../../constants/colors';
import {spacing} from '../../../constants/spacing';
import {routes} from '../../../navigation/routes';

const logo = require('../../../../assets/images/logo.png');

const LoginScreen: React.FunctionComponent<{navigation: any}> = ({
  navigation,
}) => {
  return (
    <Screen>
      <Image
        source={logo}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.buttonsRoot}>
        <Button
          onPress={() => navigation.navigate(routes.HOME)}
          style={[styles.buttons, styles.log]}>
          <Text style={{color: colors.black}}>Log in</Text>
        </Button>
        <Button
          onPress={() => console.log('Press log in btn')}
          style={[styles.buttons, styles.sign]}>
          <Text style={{color: colors.black}}>Sign-up</Text>
        </Button>
      </View>
    </Screen>
  );
};

export default LoginScreen;

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
  header: {
    color: colors.white,
  },
  buttons: {
    borderRadius: 0,
    backgroundColor: colors.white,
    paddingBottom: spacing.spacing12,
  },
  log: {
    left: 0,
  },
  sign: {
    right: 0,
  },
  buttonsRoot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
