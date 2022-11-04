import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import layout from '../../../constants/layout';
import { locale } from '../../../constants/locale';
import theme from '../../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    badge: {
      backgroundColor: theme.COLOR.ThemeGreenPrimary,
      paddingVertical: layout.window.toNormH(3),
      paddingHorizontal: layout.window.toNormH(13),
      borderRadius: layout.window.toNormW(4),
    },
    currencyText: {
      fontSize: layout.window.toNormH(12),
      lineHeight: layout.window.toNormH(16),
      color: theme.COLOR.WhitePrimary,
      fontWeight: "bold",
    }
  });

interface IProps {
  
}

const CurrencyContainer: React.FC<IProps> = ({
  
}) => {
  const styles = createStyles();

  return (
    <View style={styles.badge}>
      <Text style={styles.currencyText}>{locale.CURRENCY}</Text>
    </View>
  );
};

export default CurrencyContainer;
