/* tslint:disable:jsx-use-translation-function */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PSScreenWrapper from '../components/PSScreenWrapper';
import { NavigatorStyle, ScreenProps } from '../lib/commonTypes';
import { navBarTabLanding } from '../styles/Navigation';
import PSLabeledValues, { PSLabeledValuesProps } from '../components/PSLabeledValues';
import { color, fontSize, palette } from '../styles/variables';

type Screen = import ('react-native-navigation').Screen;

export interface PSLabeledValuesSampleProps extends ScreenProps, PSLabeledValuesProps {}

const styles = StyleSheet.create({
  section: {
    padding: 15
  },
  labels: {
    fontSize: fontSize.large
  },
  values: {
    color: color.green
  },
  container: {
    borderColor: palette.accent
  }
});

const mockValues = [
  {
    label: 'potting soil',
    value: '$15.99',
    textStyle: {
      fontWeight: 600,
      fontColor: palette.accent
    }
  },
  {
    label: 'orchid',
    value: '$5.29',
    textStyle: {
      fontWeight: 600,
      fontColor: palette.accent
    }
  },
  {
    label: 'greeting card',
    value: '$1.39',
    textStyle: {
      fontWeight: 600,
      fontColor: palette.accent
    }
  }
];

class PSLabeledValuesSample extends Component<PSLabeledValuesSampleProps> {
  static navigatorStyle: NavigatorStyle = navBarTabLanding;

  render(): JSX.Element {
    const { navigator } = this.props;

    return (
      <PSScreenWrapper
        hideGlobalBanner={true}
        navigator={navigator}
      >
        <View style={styles.section}>
          <PSLabeledValues
            items={mockValues}
            containerStyle={styles.container}
            labelStyle={styles.labels}
            valueStyle={styles.values}
          />
        </View>
      </PSScreenWrapper>
    );
  }

  goTo = (screen: Screen) => () => {
    this.props.navigator.push(screen);
  }
}

export default PSLabeledValuesSample;
