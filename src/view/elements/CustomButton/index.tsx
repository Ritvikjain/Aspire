import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import layout from '../../../constants/layout';
import theme from '../../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    buttonStyle: {
      paddingVertical: layout.window.toNormH(17),
      width: '100%',
      backgroundColor: theme.COLOR.ThemeGreenPrimary,
      borderRadius: layout.window.toNormW(30),
      shadowOffset: {
        width: layout.window.toNormW(0),
        height: layout.window.toNormH(2)
      },
      shadowOpacity: 1,
      shadowColor: theme.COLOR.CTAShadowColor,
      shadowRadius: 6,
    },
    buttonDisabledStyle: {
      backgroundColor: theme.COLOR.Grey
    },
    ctaText: {
      textAlign: 'center',
      fontSize: layout.window.toNormH(16),
      color: theme.COLOR.WhitePrimary,
      fontWeight: '600',
    }
  });

interface IProps {
  title: string;
  onClick: Function;
  isDisabled?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  title,
  onClick,
  isDisabled,
}) => {
  const styles = createStyles();

  return (
    <TouchableOpacity style={[styles.buttonStyle, isDisabled ? styles.buttonDisabledStyle : {}]} onPress={onClick}>
      <Text style={styles.ctaText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
