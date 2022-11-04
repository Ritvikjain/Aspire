import {
  OptionsStatusBar,
} from 'react-native-navigation';
import { SCREENS } from '../constants/screens';
import { Router } from './navigation';
import theme from '../constants/theme';

const statusBarTypes: { [key: string]: OptionsStatusBar } = {
  transparent: {
    drawBehind: true,
    backgroundColor: 'transparent',
  },
  transparent2: {
    drawBehind: false,
    backgroundColor: 'transparent',
    style: 'dark',
  },
};

export const goBack = (componentId) => {
  Router.pop(componentId);
}

export const showSplash = (props) => {
  Router.setRoot(SCREENS.Splash, {
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.Splash,
              passProps: { ...props },
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
                statusBar: statusBarTypes.transparent1,
                animations: { setRoot: { waitForRender: true } },
              },
            },
          },
        ],
      },
    },
  });
};

export const showDashboard = (props) => {
  Router.setRoot(SCREENS.Dashboard, {
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.Dashboard,
              passProps: { ...props },
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
                statusBar: statusBarTypes.transparent1,
                animations: { setRoot: { waitForRender: true } },
              },
            },
          },
        ],
      },
    },
  });
};

export const showWeeklySpendingLimit = (componentId: string, props: object) => {
  Router.push(
    SCREENS.WeeklySpendingLimit,
    componentId,
    {
      component: {
        name: SCREENS.WeeklySpendingLimit,
        passProps: {
          ...props,
          screenName: SCREENS.WeeklySpendingLimit,
        },
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
          statusBar: statusBarTypes.transparent1,
          animations: { push: { waitForRender: true } },
        },
      },
    },
  );
}