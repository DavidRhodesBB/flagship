/* tslint:disable:jsx-use-translation-function */
// We don't need to worry about translating the element strings
// in this file since it should only be used in development
import React, { Component } from 'react';
import PSScreenWrapper from '../components/PSScreenWrapper';
import Row from '../components/PSRow';
import {
  StyleSheet
} from 'react-native';
import { border } from '../styles/variables';
import { NavigatorStyle, SampleMenuRowItem, ScreenProps } from '../lib/commonTypes';
import { navBarSampleScreen } from '../styles/Navigation';
type Screen = import ('react-native-navigation').Screen;

const screens: SampleMenuRowItem[] = [
  {
    title: 'Address Form',
    screen: 'AddressFormSample',
    passProps: {
      sampleScreen: true
    }
  },
  {
    title: 'Contact Info Form',
    screen: 'ContactInfoSample',
    passProps: {
      sampleScreen: true
    }
  }
];

const styles = StyleSheet.create({
  listItemBorder: {
    borderBottomWidth: border.width,
    borderBottomColor: border.color
  }
});

export interface DevelopmentScreenState {
  gridItemWidth?: number;
}

export interface FormSampleMenuState {
  deviceToken: string;
}

export interface FormSampleMenuProps extends ScreenProps {
  sampleScreen?: boolean;
}
class FormsSampleMenu extends Component<FormSampleMenuProps, FormSampleMenuState> {
  static navigatorStyle: NavigatorStyle = navBarSampleScreen;

  state: FormSampleMenuState = {
    deviceToken: 'NOT INITIALIZED'
  };

  render(): JSX.Element {
    const { navigator } = this.props;

    return (
      <PSScreenWrapper
        hideGlobalBanner={true}
        navigator={navigator}
      >
        {screens.map((screen, i) => (
          <Row
            style={styles.listItemBorder}
            key={i}
            title={screen.title || `Screen ${i}`}
            onPress={this.goTo(screen)}
          />
        ))}
      </PSScreenWrapper>
    );
  }

  goTo = (screen: Screen) => () => {
    this.props.navigator.push(screen);
  }
}

export default FormsSampleMenu;
