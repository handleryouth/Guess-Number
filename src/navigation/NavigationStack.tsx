import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NAVIGATION_SCREEN,
  ROUTE_DEFAULT_THEME,
  SCREEN_OPTIONS,
} from "@src/const";
import { RootStackParamList } from "@src/types";
import { SafeAreaView } from "@src/components";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationStack() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={ROUTE_DEFAULT_THEME}>
        <SafeAreaView>
          <Stack.Navigator initialRouteName="gameHome">
            {NAVIGATION_SCREEN.map((item) => (
              <Stack.Screen
                key={item.name}
                name={item.name}
                options={SCREEN_OPTIONS}
                component={item.component}
              />
            ))}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
