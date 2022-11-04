import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import layout from '../../../constants/layout';
import {locale} from '../../../constants/locale';
import theme from '../../../constants/theme';
import aspireLogo from '../../images/aspireLogo.png';
import visaLogo from '../../images/visaLogo.png';
import eyeOpenIcon from '../../images/eyeOpenIcon.png';
import eyeCloseIcon from '../../images/eyeCloseIcon.png';

const createStyles = () =>
  StyleSheet.create({
    cardOuterContainer: {
      marginTop: layout.window.toNormH(-60),
      width: '100%',
    },
    cardContainer: {
      padding: layout.window.toNormW(24),
      borderRadius: layout.window.toNormW(12),
      backgroundColor: theme.COLOR.ThemeGreenPrimary,
    },
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    aspireLogo: {
      width: layout.window.toNormW(74),
      height: layout.window.toNormW(21),
    },
    nameContainer: {
      marginTop: layout.window.toNormH(24),
    },
    name: {
      fontSize: layout.window.toNormH(22),
      lineHeight: layout.window.toNormH(30),
      color: theme.COLOR.WhitePrimary,
      fontWeight: 'bold',
    },
    numberContainer: {
      marginTop: layout.window.toNormH(24),
      flexDirection: 'row',
    },
    cardNumberText: {
      fontSize: layout.window.toNormH(14),
      lineHeight: layout.window.toNormH(19),
      color: theme.COLOR.WhitePrimary,
      fontWeight: '600',
      letterSpacing: layout.window.toNormW(4),
    },
    cardNumberTxtMargin: {
      marginLeft: layout.window.toNormW(24),
    },
    expCvvContainer: {
      marginTop: layout.window.toNormH(15),
      marginBottom: layout.window.toNormH(4),
      flexDirection: 'row',
    },
    expCvvText: {
      fontSize: layout.window.toNormH(13),
      lineHeight: layout.window.toNormH(18),
      color: theme.COLOR.WhitePrimary,
      fontWeight: '600',
    },
    cvvText: {
      marginLeft: layout.window.toNormW(32),
    },
    visaLogo: {
      width: layout.window.toNormW(59),
      height: layout.window.toNormW(20),
    },
    cardDetailsToggleCta: {
      position: 'absolute',
      right: 0,
      top: layout.window.toNormH(-26),
      backgroundColor: theme.COLOR.WhitePrimary,
      borderRadius: layout.window.toNormW(6),
      paddingHorizontal: layout.window.toNormW(12),
      paddingTop: layout.window.toNormW(8),
      paddingBottom: layout.window.toNormW(20),
      flexDirection: 'row',
      alignItems: 'center',
    },
    eyeIcon: {
      width: layout.window.toNormW(16),
      height: layout.window.toNormW(16),
    },
    detailsToggleTextCta: {
      fontSize: layout.window.toNormH(12),
      // lineHeight: layout.window.toNormH(20),
      color: theme.COLOR.ThemeGreenPrimary,
      fontWeight: '500',
      marginLeft: layout.window.toNormW(4),
    },
  });

interface IProps {
  cardDetails: {
    userName: string;
    cardNumber: string;
    expDate: string;
    cvv: string;
  };
}

const CardWidget: React.FC<IProps> = ({cardDetails}) => {
  const styles = createStyles();
  const [showCardDetails, setShowCardDetils] = useState(false);

  const cardFormattedDisplay = () => {
    let cardNumArr = [];
    for (let index = 0; index < 16; index += 4) {
      if (index !== 12 && !showCardDetails) {
        cardNumArr.push('••••');
      } else {
        cardNumArr.push(cardDetails?.cardNumber?.substring(index, index + 4));
      }
    }
    return cardNumArr.map((num, index) => (
      <Text
        style={[
          styles.cardNumberText,
          index !== 0 ? styles.cardNumberTxtMargin : {},
        ]}
        key={index}>
        {num}
      </Text>
    ));
  };

  return (
    <View style={styles.cardOuterContainer}>
      <TouchableOpacity
        style={styles.cardDetailsToggleCta}
        onPress={() => setShowCardDetils(!showCardDetails)}>
        <Image
          source={showCardDetails ? eyeCloseIcon : eyeOpenIcon}
          style={styles.eyeIcon}
        />
        <Text style={styles.detailsToggleTextCta}>
          {showCardDetails ? locale.HIDE_CARD_Number : locale.SHOW_CARD_Number}
        </Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.logoContainer}>
          <Image source={aspireLogo} style={styles.aspireLogo} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{cardDetails?.userName}</Text>
        </View>
        <View style={styles.numberContainer}>{cardFormattedDisplay()}</View>
        <View style={styles.expCvvContainer}>
          <Text style={styles.expCvvText}>
            {locale.EXP_TITLE} {cardDetails?.expDate}
          </Text>
          <Text style={[styles.expCvvText, styles.cvvText]}>
            {locale.CVV_TITLE} {showCardDetails ? cardDetails?.cvv : '***'}
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={visaLogo} style={styles.visaLogo} />
        </View>
      </View>
    </View>
  );
};

export default CardWidget;
