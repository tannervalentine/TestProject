import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NumberButton = (props) => {
  return (
    <TouchableOpacity style={{...Styles.container, width: props.ButtonWidth}} onPress={() => props.ButtonAction(props.Number)}>
      <Text style={Styles.text}>{props.Number}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#202020',
    borderWidth: 1,
    borderColor: "#000000",
    paddingTop: '25%',
    position: 'relative',
  },
  text: {
    fontSize: 48,
    color: '#FFFFFF',
    position: 'absolute',
  },
});

export default NumberButton;