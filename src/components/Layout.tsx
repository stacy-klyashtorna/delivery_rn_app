import {View, StyleSheet} from 'react-native';
import React from 'react';

const Screen: React.FunctionComponent<{style?: any}> = ({children, style}) => {
  return <View style={[styles.layout, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
