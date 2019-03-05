import React, {FunctionComponent, memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  label: {
    fontWeight: 'bold'
  },
  value: {}
});

export interface KeyValuePair {
  label: string;
  value: string;
  textStyle?: any;
}

export interface PSLabeledValuesProps {
  /* The array of key value objects */
  items: KeyValuePair | KeyValuePair[];
  /* view styles for list container */
  containerStyle?: StyleProp<ViewStyle>;
  /* topline text style for all text in container */
  containerTextStyle?: StyleProp<ViewStyle>;
  /* text styles for labels */
  labelStyle?: StyleProp<TextStyle>;
  /* text styles for values */
  valueStyle?: StyleProp<TextStyle>;
}

const PSLabeledValues: FunctionComponent<PSLabeledValuesProps> = props => {
  const { items, containerStyle, labelStyle, valueStyle, containerTextStyle } = props;
  const renderLine = (item: KeyValuePair, index: number): JSX.Element => {
    const { label, value } = item;

    return (
      <Text
        key={index}
        style={containerTextStyle}
      >
        <Text style={[styles.label, labelStyle]}>
          {label}:{' '}
        </Text>
        <Text style={[styles.value, valueStyle]}>
          {value}
        </Text>
      </Text>
    );
  };

  let body = null;

  if (Array.isArray(items)) {
    body = items.map(renderLine);
  } else {
    body = renderLine(items, 0);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {body}
    </View>
  );
};

export default memo(PSLabeledValues);
