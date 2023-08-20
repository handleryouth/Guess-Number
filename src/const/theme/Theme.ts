import { DefaultTheme, Theme } from "@react-navigation/native";

export const ROUTE_DEFAULT_THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
