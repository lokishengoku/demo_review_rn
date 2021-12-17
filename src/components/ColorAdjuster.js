import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ColorAdjuster({ title, onIncrease, onDecrease }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.buttons}>
        <Button title="increase" onPress={onIncrease} />
        <Button title="decrease" onPress={onDecrease} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    marginVertical: 10,
  },
  buttons: {
    alignItems: "center",
  },
});
