import React, { useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return { ...state, red: state.red + action.payload };
    case "change_green":
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
export default function RgbScreen() {
  const [rgbState, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View style={styles.container}>
      <ColorAdjuster
        title="Red"
        onIncrease={() => dispatch({ type: "change_red", payload: 10 })}
        onDecrease={() => dispatch({ type: "change_red", payload: -10 })}
      />
      <ColorAdjuster
        title="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: 10 })}
        onDecrease={() => dispatch({ type: "change_green", payload: -10 })}
      />
      <ColorAdjuster
        title="Blue"
        onIncrease={() => dispatch({ type: "change_blue", payload: 10 })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -10 })}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${rgbState.red}, ${rgbState.green}, ${rgbState.blue})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
