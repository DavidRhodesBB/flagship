import { ImageURISource } from 'react-native';
export type PushedScreen<P> = import ('react-native-navigation').PushedScreen<P>;
export type NavigatorStyle = import ('react-native-navigation').NavigatorStyle;

export interface ScreenProps {
  navigator: import ('react-native-navigation').Navigator;
  onNav: (handler: (event: any) => void) => void;
}

export interface NavButton {
  button: import ('react-native-navigation').NavigatorButton;
  action: (params: any) => void;
}

export interface GridItem {
  title: string;
  image: ImageURISource;
  path: string;
}

export interface IsSampleScreen {
  sampleScreen: boolean;
}

/*
SampleMenuRowItem allows for passing required props to example component screens
*/
export interface SampleMenuRowItem {
  title: string;
  screen: string;
  passProps: IsSampleScreen;
}
