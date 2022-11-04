import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import layout from '../../../../../constants/layout';
import { locale } from '../../../../../constants/locale';
import theme from '../../../../../constants/theme';
import homeTabIcon from '../../../../images/homeTabIcon.png';
import cardTabIcon from '../../../../images/cardTabIcon.png';
import paymentsTabIcon from '../../../../images/paymentsTabIcon.png';
import creditTabIcon from '../../../../images/creditTabIcon.png';
import profileTabIcon from '../../../../images/profileTabIcon.png';

const createStyles = () =>
  StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      width: '100%',
      paddingTop: layout.window.toNormH(12),
      paddingBottom: layout.window.toNormH(24),
      position: 'absolute',
      bottom: 0,
      paddingHorizontal: layout.window.toNormW(24),
      justifyContent: 'space-between',
      shadowOffset: {
        width: layout.window.toNormW(0),
        height: layout.window.toNormH(-3),
      },
      shadowOpacity: 1.0,
      shadowColor: theme.COLOR.TabShadowColor,
      shadowRadius: layout.window.toNormW(6),
      elevation: 10,
      backgroundColor: theme.COLOR.WhitePrimary,
      ...Platform.select({
        android:{
          shadowColor: theme.COLOR.BlackDark,
        }})
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
    },
    tabIcon: {
      width: layout.window.toNormW(24),
      height: layout.window.toNormW(24),
    },
    tabText: {
      marginTop: layout.window.toNormH(3),
      fontSize: layout.window.toNormH(9),
      lineHeight: layout.window.toNormH(12),
      color: '#dddddd',
      fontWeight: "600",
    },
    tabActiveText: {
      marginTop: layout.window.toNormH(3),
      fontSize: layout.window.toNormH(9),
      lineHeight: layout.window.toNormH(12),
      color: theme.COLOR.ThemeGreenPrimary,
      fontWeight: "600",
    }
  });

interface IProps {
  bottomTabs: Array<{
    tabTitle: string;
    displayName: string;
    isActive: boolean;
  }>;
}

const BottomTabs: React.FC<IProps> = ({
  bottomTabs,
}) => {
  const styles = createStyles();

  const iconMap = {
    home: homeTabIcon,
    card: cardTabIcon,
    payments: paymentsTabIcon,
    credit: creditTabIcon,
    profile: profileTabIcon,
  }

  return (
    <View style={styles.tabsContainer}>
      {bottomTabs?.map(tab => <TouchableOpacity style={styles.tabItem} key={tab?.tabTitle}>
        <Image source={iconMap[tab?.tabTitle]} style={styles.tabIcon}/>
        <Text style={[tab?.isActive ? styles?.tabActiveText : styles.tabText]}>{tab?.displayName}</Text>
      </TouchableOpacity>)}
    </View>
  );
};

export default BottomTabs;
