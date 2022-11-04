import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { SCREENS } from '../constants/screens';
import {
  View,
} from 'react-native';
import Splash from '../view/screens/splash';
import { IStoreProviderType } from './navigation-types';
import Dashboard from '../view/screens/dashboard';
import WeeklySpendingLimit from '../view/screens/weeklySpendingLimit';

export const registerComponentWithRedux = ({ store }: IStoreProviderType) => (
  name: string,
  Component: any,
) => {
  Navigation.registerComponent(name, () => (props) =>
    <Provider store={store}>
      <Component {...props}/>
    </Provider>,
    () => <View></View>);
};

export function registerScreens(redux: IStoreProviderType) {
  // Resiter screens here
  registerComponentWithRedux(redux)(SCREENS.Splash, Splash);
  registerComponentWithRedux(redux)(SCREENS.Dashboard, Dashboard);
  registerComponentWithRedux(redux)(SCREENS.WeeklySpendingLimit, WeeklySpendingLimit);
}
