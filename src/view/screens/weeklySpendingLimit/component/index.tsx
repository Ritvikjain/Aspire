import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import layout from '../../../../constants/layout';
import {locale} from '../../../../constants/locale';
import theme from '../../../../constants/theme';
import {IWeeklySpendingLimitState} from '../../../../constants/types';
import {formatCurrency} from '../../../../utilities/codeUtils';
import AmountInput from '../../../elements/AmountInput';
import Base from '../../../elements/Base';
import limitIcon from '../.././../images/limitIcon.png';

const createStyles = () =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: theme.COLOR.ThemePrimary,
      flex: 1,
    },
    upperContainer: {
      paddingHorizontal: layout.window.toNormW(24),
      marginTop: layout.window.toNormH(4),
    },
    bottomContainer: {
      backgroundColor: theme.COLOR.WhitePrimary,
      marginTop: layout.window.toNormH(40),
      borderTopLeftRadius: layout.window.toNormW(24),
      borderTopRightRadius: layout.window.toNormW(24),
      paddingHorizontal: layout.window.toNormW(24),
      paddingBottom: layout.window.toNormW(100),
      flex: 1,
      paddingTop: layout.window.toNormH(32),
    },
    title: {
      fontSize: layout.window.toNormH(24),
      color: theme.COLOR.WhitePrimary,
      fontWeight: 'bold',
    },
    setLimitTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    limitIcon: {
      width: layout.window.toNormW(16),
      height: layout.window.toNormW(16),
    },
    setLimitTitle: {
      fontSize: layout.window.toNormH(14),
      color: theme.COLOR.BlackDark,
      marginLeft: layout.window.toNormW(12),
      fontWeight: '400',
    },
    descriptionText: {
      fontSize: layout.window.toNormH(13),
      color: theme.COLOR.GreyDark,
      marginTop: layout.window.toNormW(12),
      fontWeight: '300',
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: layout.window.toNormH(32),
    },
    amountOption: {
      width: layout.window.toNormW(114),
      paddingVertical: layout.window.toNormH(12),
      borderRadius: layout.window.toNormW(4),
      backgroundColor: theme.COLOR.ThemeGreenPrimaryOpaque,
      justifyContent: 'center',
      alignItems: 'center',
    },
    amount: {
      fontSize: layout.window.toNormH(12),
      color: theme.COLOR.ThemeGreenPrimary,
      fontWeight: '500',
    },
  });

interface IProps {
  onBack: Function;
  onClickSaveLimit: Function;
  weeklySpendingLimit: IWeeklySpendingLimitState;
}

const WeeklySpendingLimit: React.FC<IProps> = ({
  onBack,
  onClickSaveLimit,
  weeklySpendingLimit,
}) => {
  const styles = createStyles();
  const [amount, setAmount] = useState(
    weeklySpendingLimit?.value > 0 ? weeklySpendingLimit?.value?.toString() : '',
  );

  const suggestedAmountOptions = [5000, 10000, 20000];

  return (
    <Base
      headerAttributes={{
        onBack,
      }}
      bottomFillColor={theme.COLOR.WhitePrimary}
      footerAttributes={{
        primaryCta: {
          title: 'Save',
          onClick: () => onClickSaveLimit(parseInt(amount)),
          isDisabled: !(parseInt(amount) > 0),
        },
      }}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{locale.SPENDING_LIMIT}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.setLimitTitleContainer}>
          <Image source={limitIcon} style={styles.limitIcon} />
          <Text style={styles.setLimitTitle}>
            {locale.SET_WEEKLY_LIMIT_TITLE}
          </Text>
        </View>
        <AmountInput value={amount} onChangeText={setAmount} />
        <Text style={styles.descriptionText}>
          {locale.SET_WEEKLY_LIMIT_DESCRIPTION}
        </Text>
        <View style={styles.amountContainer}>
          {suggestedAmountOptions?.map((amount, index) => (
            <TouchableOpacity
              onPress={() => setAmount(amount?.toString())}
              style={styles.amountOption}
              key={index}>
              <Text style={styles.amount}>S$ {formatCurrency(amount)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Base>
  );
};

export default WeeklySpendingLimit;
