import {
  Navigation,
  OptionsModalPresentationStyle,
  OptionsStatusBar,
  Options,
} from 'react-native-navigation';
import { IRouterObject } from './navigation-types';
//   import DynamicComponentCreator from '../../shared/view/widgets/dynamicContainer/dynamicComponent';

const Router: IRouterObject = {
  push: (screenName, componentId, layout) => {
    Navigation.push(componentId, layout);
  },
  setRoot: (screenName, layoutRoot) => {
    Navigation.setRoot(layoutRoot);
  },
  pop: (componentId) => {
    Navigation.pop(componentId);
  },
  popTo: (componentId) => {
    Navigation.pop(componentId);
  },
  popToRoot: (componentId) => {
    Navigation.popTo(componentId);
  },
  dismissAllModals: () => {
    Navigation.dismissAllModals();
  },
  dismissModal: (componentId) => {
    Navigation.dismissModal(componentId);
  },
  showModal: (screenName, layout) => {
    Navigation.showModal(layout);
  },
  registerScreens: (screenName, screenData) => {
  //   registerComponentWithRedux({ store })(
  //     screenName,
  //     DynamicComponentCreator(screenData, screenName),
  //   );
  },
};

export { Router };
