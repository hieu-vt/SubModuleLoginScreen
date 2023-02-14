import React from 'react';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { styles } from './styles';
import { ErrorLineProps } from './type';

import { sharedTiming } from '../../common';
import { useTheme } from '../themes';

export const ErrorLine = ({ error, disabled }: ErrorLineProps) => {
  // state
  const { colors } = useTheme();
  const widthPercent = useDerivedValue(
    () =>
      sharedTiming(error.value && !disabled.value ? 100 : 0, { duration: 200 }),
    [],
  );

  // style
  const lineStyle = useAnimatedStyle(
    () => ({
      width: `${widthPercent.value}%`,
      backgroundColor: colors.error,
    }),
    [colors.error],
  );

  // render
  return (
    <Animated.View
      pointerEvents={'none'}
      style={[styles.lineStatus, lineStyle]}
    />
  );
};
