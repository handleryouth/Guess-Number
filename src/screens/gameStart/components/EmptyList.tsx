import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "@src/color";

export default function EmptyList() {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        No number guessed yet. Start guessing!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
