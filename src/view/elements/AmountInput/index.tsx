import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Animated,
  TextInput,
  Platform,
} from 'react-native';

import layout from '../../../constants/layout';
import {locale} from '../../../constants/locale';
import theme from '../../../constants/theme';
import { formatCurrency } from '../../../utilities/codeUtils';

const createStyles = () =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      paddingBottom: layout.window.toNormH(6),
      borderBottomWidth: layout.window.toNormH(1),
      borderBottomColor: theme.COLOR.GreyLight,
      marginTop: layout.window.toNormH(12),
    },
    textInput: {
      fontSize: layout.window.toNormH(24),
      color: theme.COLOR.BlackDark,
      flex: 1,
      fontWeight: 'bold',
      padding: 0,
    },
    secondaryLabel: {
      backgroundColor: theme.COLOR.ThemeGreenPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: layout.window.toNormW(12),
      paddingVertical: layout.window.toNormH(3),
      borderRadius: layout.window.toNormW(3),
      marginRight: layout.window.toNormW(10),
    },
    secondaryLabelText: {
      fontSize: layout.window.toNormH(13),
      color: theme.COLOR.WhitePrimary,
      fontWeight: 'bold',
    },
  });

interface IProps {
  value: string;
  textInputStyles?: Object;
  otherTextInputProps?: Object;
  onChangeText: Function;
  inputContainerStyles?: Object;
}

const AmountInput: React.FC<IProps> = ({
  value,
  textInputStyles,
  otherTextInputProps,
  onChangeText,
  inputContainerStyles,
}) => {
  const styles = createStyles();

  const _onChangeText = updatedValue => {
    onChangeText(updatedValue?.split(',').join(''));
  };

  return (
    <View style={[styles.inputContainer, inputContainerStyles]}>
      <View style={[styles.secondaryLabel]}>
        <Text style={[styles.secondaryLabelText]}>{'S$'}</Text>
      </View>
      <TextInput
        value={`${formatCurrency(value)}`}
        style={[styles.textInput, textInputStyles]}
        onChangeText={_onChangeText}
        selectionColor={theme.COLOR.BlackDark}
        keyboardType={'number-pad'}
        {...otherTextInputProps}
      />
    </View>
  );
};

export default AmountInput;
