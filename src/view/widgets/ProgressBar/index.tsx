import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import layout from '../../../constants/layout';
import { locale } from '../../../constants/locale';
import theme from '../../../constants/theme';
import { formatCurrency } from '../../../utilities/codeUtils';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      flex: 1,
      fontSize: layout.window.toNormH(13),
      color: theme.COLOR.BlackDark,
      fontWeight: '400',
    },
    limitContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    currentValue: {
      fontSize: layout.window.toNormH(13),
      color: theme.COLOR.ThemeGreenPrimary,
      fontWeight: '400',
    },
    maxValue: {
      fontSize: layout.window.toNormH(13),
      color: theme.COLOR.GreyLight200,
      fontWeight: '400',
    },
    progressContainer: {
      width: '100%',
      height: layout.window.toNormH(15),
      borderRadius: layout.window.toNormH(30),
      backgroundColor: theme.COLOR.ThemeGreenPrimaryOpaque,
      overflow: 'hidden',
      marginTop: layout.window.toNormH(6),
    },
    fillContainer: {
      height: layout.window.toNormH(200),
      top: layout.window.toNormH(-100),
      backgroundColor: theme.COLOR.ThemeGreenPrimary,
      transform: [{ rotate: '15deg'}]
    }
  });

interface IProps {
  customContainerStyles?: object;
  title: string;
  limits: {
    currentValue: number;
    maxLimit: number;
  }
}

const ProgressBar: React.FC<IProps> = ({
  customContainerStyles,
  title,
  limits,
}) => {
  const styles = createStyles();

  const getFillValue = () => {
    return `${(limits?.currentValue / limits?.maxLimit)*100}%`;
  }
  return (
    <View style={[styles.container, customContainerStyles]}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.limitContainer}>
          <Text style={styles.currentValue}>{locale.CURRENCY_DOLLAR}{formatCurrency(limits?.currentValue)} </Text>
          <Text style={styles.maxValue}>| {locale.CURRENCY_DOLLAR}{formatCurrency(limits?.maxLimit)}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.fillContainer, {width: getFillValue()}]}>

        </View>
      </View>
    </View>
  );
};

export default ProgressBar;