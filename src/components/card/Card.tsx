import { View, StyleSheet } from "react-native";
import React, { ComponentProps, ReactNode } from "react";
import { COLORS } from "@src/color";

export interface CardProps extends ComponentProps<typeof View> {
  children: ReactNode;
}

export default function Card({ children, style, ...props }: CardProps) {
  return (
    <View {...props} style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
  },
});
