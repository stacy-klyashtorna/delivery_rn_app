import React from 'react';
import {Animated, StyleSheet, TouchableWithoutFeedback} from 'react-native';

interface Props {
  onPress: () => void;
  style?: {};
}

export const Button: React.FunctionComponent<Props> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.backgroundBase, style]}>
        <Animated.Text style={[styles.textBase]}>{children}</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundBase: {
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  textBase: {
    // ...fonts.button,
  },
});
