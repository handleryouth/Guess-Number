import React, { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "@src/color";

export interface PrimaryButtonProps {
  children: ReactNode;
  onPress: () => void;
}

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={styles.buttonInnerContainer}
        android_ripple={{
          color: "#640233",
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary700,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
