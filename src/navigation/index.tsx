import {Navigation} from 'react-native-navigation';
import store from '../redux/store';
import {Platform} from 'react-native';
import layout from '../constants/layout';
import theme from '../constants/theme';
import { AppState, AppStateStatus } from 'react-native';
import { registerScreens } from './registerScreens';
import { showDashboard, showSplash } from './navigators';

const App = () => {
  // initializing APP
  registerScreens({store});
  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    try {
    } catch (error) {
      console.log('appstate change error', error);
    }
  };

  AppState.addEventListener('change', handleAppStateChange);

  const width = layout.window.deviceWidth;
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
      topBar: {visible: false, drawBehind: true},
      statusBar: {
        backgroundColor: theme.COLOR.ThemePrimary,
        style: 'light',
      },
      ...Platform.select({
        android: {
          animations: {
            push: {
              content: {
                translationX: {
                  from: width,
                  to: 0,
                  duration: 150,
                },
              },
            },
            pop: {
              content: {
                translationX: {
                  from: 0,
                  to: -1 * width,
                  duration: 150,
                },
              },
            },
          },
        },
        ios: {},
      }),
    });
    showDashboard({});
  });
};

export default App;
