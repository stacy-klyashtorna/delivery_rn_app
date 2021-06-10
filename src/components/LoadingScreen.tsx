import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {colors} from '../constants/colors';
import {common as constants} from '../constants/common';

const LoadingScreen: React.FunctionComponent<{show: boolean}> = ({show}) => {
  if (!show) {
    return null;
  }

  return (
    <View style={styles.spinner} pointerEvents="none">
      <ActivityIndicator
        size="large"
        animating={true}
        color={colors.grey_900}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: constants.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
