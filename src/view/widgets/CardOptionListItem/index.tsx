import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import layout from '../../../constants/layout';
import theme from '../../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    optionContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: layout.window.toNormH(32),
    },
    optionIcon: {
      width: layout.window.toNormW(32),
      height: layout.window.toNormW(32),
    },
    detailsContainer: {
      flex: 1,
      marginLeft: layout.window.toNormW(12),
    },
    optionTitle: {
      fontSize: layout.window.toNormH(14),
      color: theme.COLOR.ThemePrimaryLight,
      fontWeight: "400",
    },
    optionSubtitle: {
      fontSize: layout.window.toNormH(11),
      color: theme.COLOR.BlackLight,
      fontWeight: "400",
      marginTop: layout.window.toNormH(2),
    }
  });

interface IProps {
  optionIcon: any;
  optionTitle: string;
  optionSubtitle: string;
  isToggleable?: boolean;
  toggleSwitch?: Function;
  toggleValue?: boolean;
}

const CardOptionListItem: React.FC<IProps> = ({
  optionIcon,
  optionTitle,
  optionSubtitle,
  isToggleable,
  toggleSwitch,
  toggleValue,
}) => {
  const styles = createStyles();

  return (
    <TouchableOpacity style={styles.optionContainer} disabled={isToggleable}>
      <Image source={optionIcon} style={styles.optionIcon}/>
      <View style={styles.detailsContainer}>
        <Text style={styles.optionTitle}>{optionTitle}</Text>
        <Text style={styles.optionSubtitle}>{optionSubtitle}</Text>
      </View>
      {isToggleable ? <Switch
        trackColor={{ false: theme.COLOR.Grey, true: theme.COLOR.ThemeGreenPrimary }}
        thumbColor={theme.COLOR.WhitePrimary}
        onValueChange={toggleSwitch}
        value={toggleValue}
      /> : null}
    </TouchableOpacity>
  );
};

export default CardOptionListItem;