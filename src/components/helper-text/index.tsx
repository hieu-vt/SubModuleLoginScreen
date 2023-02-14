import React, { useEffect, useMemo, useState } from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { styles } from './styles';
import { HelperTextProps } from './type';

import { useTheme } from '../themes';
import { ColorDefault } from '../themes/color';

export const HelperText = ({
  msg,
  type,
  colorThemeInfo,
  colorThemeError,
}: HelperTextProps) => {
  // state
  const theme = useTheme();
  const [measured, setMeasured] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const [currentMessage, setCurrentMessage] = useState<string>(msg ?? '');
  const height = useSharedValue(0);

  // function
  const _onLayoutContent = (e: LayoutChangeEvent) => {
    setMeasured({ ...e.nativeEvent.layout });
  };

  // style
  const textStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      { height: measured.height },
      type === 'error'
        ? {
            color: colorThemeError ? 'red' : ColorDefault.error,
          }
        : {
            color: colorThemeInfo ? 'red' : ColorDefault.info,
          },
    ],
    [colorThemeError, colorThemeInfo, measured.height, theme.colors, type],
  );

  // effect
  useEffect(() => {
    if (msg) {
      setCurrentMessage(msg);
    }
  }, [msg]);

  // reanimated style
  const style = useAnimatedStyle(() => ({
    height: height.value,
    opacity: 1,
  }));

  // render
  return (
    <View style={[styles.container]}>
      <Animated.View
        pointerEvents={'none'}
        onLayout={_onLayoutContent}
        style={[styles.hiddenView]}>
        <Text style={[styles.text]}>{currentMessage}</Text>
      </Animated.View>
      <Animated.View style={[style]}>
        <Text style={[styles.text, textStyle]}>{currentMessage}</Text>
      </Animated.View>
    </View>
  );
};
