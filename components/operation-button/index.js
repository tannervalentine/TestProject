import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OperationButton = (props) => {
  return (
    <TouchableOpacity style={Styles.container} onPress={() => props.UpdateCalculations(props.Operation)}>
      <Text style={Styles.text}>
        {props.Operation}
      </Text>
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
    backgroundColor: '#FFB400',
    borderWidth: 1,
    borderColor: "#000000",
    width: '25%',
    paddingTop: '25%',
    position: 'relative',
  },
  text: {
    fontSize: 48,
    color: '#202020',
    position: 'absolute',
  },
});

export default OperationButton;