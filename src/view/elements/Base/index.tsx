import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import layout from '../../../constants/layout';
import theme from '../../../constants/theme';
import logo from '../../images/logo.png';
import CustomButton from '../CustomButton';
import BackIcon from '../../images/backIcon.png';

const createStyles = () =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: theme.COLOR.ThemePrimary,
      flex: 1,
    },
    headerContainer: {
      paddingTop: layout.window.toNormH(16),
      paddingBottom: layout.window.toNormH(15),
      flexDirection: 'row',
      paddingHorizontal: layout.window.toNormW(24),
    },
    headerLeftContainer: {
      flex: 1,
    },
    headerRightContainer: {
      flex: 1,
      alignItems: 'flex-end',
    },
    logoStyle: {
      width: layout.window.toNormW(25.5),
      height: layout.window.toNormW(25),
    },
    backIcon: {
      width: layout.window.toNormW(25),
      height: layout.window.toNormW(25),
    },
    footerContainer: {
      paddingHorizontal: layout.window.toNormW(57),
      paddingVertical: layout.window.toNormW(12),
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  });

interface IProps {
  headerAttributes?: {
    onBack: Function;
  };
  footerAttributes?: {
    fillColor?: string;
    primaryCta: {
      title: string;
      onClick: Function;
      isDisabled?: boolean;
    };
  };
  children: Element;
  bottomFillColor?: string;
}

const Base: React.FC<IProps> = ({
  headerAttributes,
  footerAttributes,
  bottomFillColor,
  ...props
}) => {
  const styles = createStyles();

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <>
          <View style={styles.headerContainer}>
            <View style={styles.headerLeftContainer}>
              {headerAttributes?.onBack ? (
                <TouchableOpacity onPress={headerAttributes?.onBack}>
                  {/* <Text style={styles.backIcon}>{'<'}</Text> */}
                  <Image source={BackIcon} style={styles.backIcon} />
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.headerRightContainer}>
              <Image source={logo} style={styles.logoStyle} />
            </View>
          </View>
          {props?.children}
          {footerAttributes ? (
            <View
              style={[
                styles.footerContainer,
                {
                  backgroundColor: footerAttributes?.fillColor
                    ? footerAttributes?.fillColor
                    : theme.COLOR.WhitePrimary,
                },
              ]}>
              <CustomButton {...footerAttributes?.primaryCta} />
            </View>
          ) : null}
        </>
      </SafeAreaView>
      {bottomFillColor && bottomFillColor?.length > 0 ? (
        <SafeAreaView style={{backgroundColor: bottomFillColor}} />
      ) : null}
    </>
  );
};

export default Base;
