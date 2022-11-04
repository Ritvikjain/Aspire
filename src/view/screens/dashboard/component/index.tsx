import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
} from 'react-native';

import layout from '../../../../constants/layout';
import {locale} from '../../../../constants/locale';
import theme from '../../../../constants/theme';
import {formatCurrency} from '../../../../utilities/codeUtils';
import Base from '../../../elements/Base';
import CurrencyContainer from '../../../elements/CurrencyContainer';
import CardOptionListItem from '../../../widgets/CardOptionListItem';
import CardWidget from '../../../widgets/CardWidget';
import BottomTabs from '../bottomTabs';
import topupIcon from '../../../images/topupIcon.png';
import spendingLimitIcon from '../../../images/spendingLimitIcon.png';
import freezeCardIcon from '../../../images/freezeCardIcon.png';
import deactivateCardIcon from '../../../images/deactivateCardIcon.png';
import getNewCardIcon from '../../../images/getNewCardIcon.png';
import {IWeeklySpendingLimitState} from '../../../../constants/types';
import ProgressBar from '../../../widgets/ProgressBar';

const createStyles = () =>
  StyleSheet.create({
    backgroundStyle: {
      backgroundColor: theme.COLOR.ThemePrimary,
      flex: 1,
    },
    upperContainer: {
      paddingHorizontal: layout.window.toNormW(24),
      marginTop: layout.window.toNormH(-24),
    },
    titleText: {
      fontSize: layout.window.toNormH(24),
      lineHeight: layout.window.toNormH(32),
      color: theme.COLOR.WhitePrimary,
      fontWeight: 'bold',
    },
    subTitleText: {
      fontSize: layout.window.toNormH(14),
      lineHeight: layout.window.toNormH(16),
      color: theme.COLOR.WhitePrimary,
      fontWeight: '400',
      marginTop: layout.window.toNormH(24),
    },
    amountContainer: {
      flexDirection: 'row',
      marginTop: layout.window.toNormH(10),
      alignItems: 'center',
    },
    amountText: {
      fontSize: layout.window.toNormH(24),
      lineHeight: layout.window.toNormH(32),
      color: theme.COLOR.WhitePrimary,
      fontWeight: 'bold',
      marginLeft: layout.window.toNormW(10),
    },
    bottomScrollContainer: {
      position: 'absolute',
      width: '100%',
      height: layout.window.deviceHeight,
      flexGrow: 1,
    },
    bottomOuterContainer: {
      paddingTop: layout.window.toNormH(263),
      flexGrow: 1,
      ...Platform.select({
        android: {
          paddingTop: layout.window.toNormH(233),
        }
      })
    },
    bottomContainer: {
      backgroundColor: theme.COLOR.WhitePrimary,
      borderTopLeftRadius: layout.window.toNormW(24),
      borderTopRightRadius: layout.window.toNormW(24),
      paddingHorizontal: layout.window.toNormW(24),
      paddingBottom: layout.window.toNormW(120),
    },
    progressContainer: {
      marginTop: layout.window.toNormH(26),
    },
  });

interface IProps {
  weeklySpendingLimit: IWeeklySpendingLimitState;
  onClickWeeklySpendingLimit: Function;
}

const Dashboard: React.FC<IProps> = ({
  weeklySpendingLimit,
  onClickWeeklySpendingLimit,
}) => {
  const styles = createStyles();
  const [isCardFreezed, setIsCardFreezed] = useState(false);

  return (
    <>
      <Base>
        <View style={styles.upperContainer}>
          <Text style={styles.titleText}>{locale.DEBIT_CARD}</Text>
          <Text style={styles.subTitleText}>{locale.AVAILABLE_BALANCE}</Text>
          <View style={styles.amountContainer}>
            <CurrencyContainer />
            <Text style={styles.amountText}>{formatCurrency(3000)}</Text>
          </View>
        </View>
        <ScrollView
          style={styles.bottomScrollContainer}
          contentContainerStyle={styles.bottomOuterContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={styles.bottomContainer}>
            <CardWidget
              cardDetails={{
                userName: 'Mark Henry',
                cardNumber: '1234123412341234',
                expDate: '12/22',
                cvv: '456',
              }}
            />

            {weeklySpendingLimit?.isEnabled ? (
              <ProgressBar
                title={locale.WEEKLY_LIMIT_PROGRESS_TITLE}
                limits={{
                  currentValue: 500,
                  maxLimit: weeklySpendingLimit?.value,
                }}
                customContainerStyles={styles.progressContainer}
              />
            ) : null}

            <CardOptionListItem
              optionIcon={topupIcon}
              optionTitle={locale.TOPUP_ACCOUNT}
              optionSubtitle={locale.TOPUP_ACCOUNT_SUBTITLE}
            />
            <CardOptionListItem
              optionIcon={spendingLimitIcon}
              optionTitle={locale.WEEKLY_SPENDING_LIMIT}
              optionSubtitle={
                weeklySpendingLimit?.isEnabled
                  ? `${
                      locale.WEEKLY_SPENDING_LIMIT_SUBTITLE_ACTIVE
                    } ${formatCurrency(weeklySpendingLimit?.value)}`
                  : locale.WEEKLY_SPENDING_LIMIT_SUBTITLE
              }
              isToggleable={true}
              toggleSwitch={onClickWeeklySpendingLimit}
              toggleValue={weeklySpendingLimit?.isEnabled}
            />
            <CardOptionListItem
              optionIcon={freezeCardIcon}
              optionTitle={locale.FREEZE_CARD}
              optionSubtitle={
                isCardFreezed
                  ? locale.FREEZE_CARD_SUBTITLE_ACTIVE
                  : locale.FREEZE_CARD_SUBTITLE
              }
              isToggleable={true}
              toggleSwitch={() => setIsCardFreezed(!isCardFreezed)}
              toggleValue={isCardFreezed}
            />
            <CardOptionListItem
              optionIcon={getNewCardIcon}
              optionTitle={locale.GET_NEW_CARD}
              optionSubtitle={locale.GET_NEW_CARD_SUBTITLE}
            />
            <CardOptionListItem
              optionIcon={deactivateCardIcon}
              optionTitle={locale.DEACTIVATED_CARDS}
              optionSubtitle={locale.DEACTIVATED_CARDS_SUBTITLE}
            />
          </View>
        </ScrollView>
      </Base>
      <BottomTabs />
    </>
  );
};

export default Dashboard;
