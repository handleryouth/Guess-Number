import React, { ComponentProps } from "react";
import { Text, StyleSheet } from "react-native";

export interface TitleProps extends ComponentProps<typeof Text> {
  children: string;
}

export default function Title({ children, style, ...props }: TitleProps) {
  return (
    <Text {...props} style={[styles.title, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
