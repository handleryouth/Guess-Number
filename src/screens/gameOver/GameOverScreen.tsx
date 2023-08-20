import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { COLORS } from "@src/color";
import { PrimaryButton, Title } from "@src/components";
import { GameOverScreenProps } from "@src/types";
import { getDeviceWidth } from "@src/utils";

export default function GameOverScreen({
  navigation,
  route,
}: GameOverScreenProps) {
  const { roundsNumber, userNumber } = route.params;
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={() => navigation.navigate("gameHome")}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: getDeviceWidth() < 380 ? 150 : 300,
    height: getDeviceWidth() < 380 ? 150 : 300,
    borderRadius: getDeviceWidth() < 350 ? 75 : 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
