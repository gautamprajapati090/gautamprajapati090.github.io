import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default function Spinner(props) {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    zIndex: 99,
    backgroundColor: "rgba(255,255,255,0.8)",
    left: 0,
    top: 0,
  }
};
