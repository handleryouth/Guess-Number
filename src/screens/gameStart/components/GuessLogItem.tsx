import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@src/color";
import { GuessLogItemProps } from "@src/types";

export default function GuessLogItem({
  guessNumber,
  roundNumber,
}: GuessLogItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guessNumber}</Text>
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
