import React, { useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const reducer = (state, action) => {
  switch (action.color) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
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
        onIncrease={() => dispatch({ color: "red", amount: 10 })}
        onDecrease={() => dispatch({ color: "red", amount: -10 })}
      />
      <ColorAdjuster
        title="Green"
        onIncrease={() => dispatch({ color: "green", amount: 10 })}
        onDecrease={() => dispatch({ color: "green", amount: -10 })}
      />
      <ColorAdjuster
        title="Blue"
        onIncrease={() => dispatch({ color: "blue", amount: 10 })}
        onDecrease={() => dispatch({ color: "blue", amount: -10 })}
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
