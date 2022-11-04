import { Store } from 'redux';
import {LayoutRoot, Layout} from 'react-native-navigation';
interface ITabType {
    name:string;
    selector: string;
  }
  
  type ScreenNameType = string | ITabType;
  type ComponentIdType = string;
  type WidgetName = string;
  
  export enum RenderJSONComponentType {
    container = "container",
    widget = "widget"
  }
  
  export interface IStoreProviderType {
    store: Store;
  }
  
  export interface IRenderJSONLayoutWidget {
    "type": RenderJSONComponentType.widget,
    widgetName: WidgetName;
    containers: IRenderJSONLayoutConainer[];
    config?: {
      conditionalChild?: {
        selector: string,
        containers: IRenderJSONLayoutConainer[],
        elseContainers: IRenderJSONLayoutConainer[],
      },
      defaultSelected?: string | Number,
    };
  }
  
  export interface IRenderJSONLayoutConainer {
    "type": RenderJSONComponentType.container,
    containerName: WidgetName;
    data?: any;
  }
  
  export type IRenderJSONLayouts = IRenderJSONLayoutWidget | IRenderJSONLayoutConainer;
  
  export interface IScreenData {
    wrapperComponent: string,
    props?: any,
    layout: IRenderJSONLayouts[];
    siblings: IRenderJSONLayouts[];
  }
  
  interface IPushRouter {
    (
      screenName: ScreenNameType,
      componentId: ComponentIdType,
      layout: Layout,
    ): void;
  }
  interface IShowModal {
    (screenName: ScreenNameType, layout: Layout): void;
  }
  interface ISetRoot {
    (screenName: ScreenNameType, layoutRoot: LayoutRoot): void;
  }
  interface IPop {
    (componentId: ComponentIdType): void;
  }
  interface IPopToRoot {
    (componentId: ComponentIdType): void;
  }
  interface IdismissAllModals {
    (): void;
  }
  
  interface IRegisterScreenFunction {
    (screenName: ScreenNameType, screenData: IScreenData): void;
  }

export interface IStoreProviderType {
    store: Store;
}

export interface IRouterObject {
    push: IPushRouter;
    setRoot: ISetRoot;
    pop: IPop;
    popTo: IPop;
    popToRoot: IPopToRoot;
    dismissModal: IPop;
    dismissAllModals: IdismissAllModals;
    showModal: IShowModal;
    registerScreens: IRegisterScreenFunction;
  }