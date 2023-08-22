import React, { ComponentProps, ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "@src/color";

export interface PrimaryButtonProps extends ComponentProps<typeof View> {
  children: ReactNode;
  onPress: () => void;
}

export default function PrimaryButton({
  children,
  onPress,
  style,
  ...props
}: PrimaryButtonProps) {
  return (
    <View {...props} style={[styles.buttonOuterContainer, style]}>
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

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary700,
    padding: 12,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
