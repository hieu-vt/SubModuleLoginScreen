import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from './components/themes';

export const useLoginStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: theme.colors.text,
        },
      }),
    [theme.colors.text],
  );
};
