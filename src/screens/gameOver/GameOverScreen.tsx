import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "@src/color";
import { PrimaryButton, Title } from "@src/components";
import { GameOverScreenProps } from "@src/types";
import { getDeviceWidth } from "@src/utils";

export default function GameOverScreen({
  navigation,
  route,
}: GameOverScreenProps) {
  const { roundsNumber, userNumber } = route.params;

  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          rowGap: height < 500 ? 10 : 25,
        },
      ]}
    >
      <Title>Game Over!</Title>

      <View
        style={[
          styles.imageContainer,
          { width: height < 500 ? 150 : 300, height: height < 500 ? 150 : 300 },
        ]}
      >
        <Image
          style={[
            styles.image,
            {
              width: height < 500 ? 150 : 300,
              height: height < 500 ? 150 : 300,
            },
          ]}
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
    rowGap: 10,
  },
  imageContainer: {
    borderRadius: getDeviceWidth() < 350 ? 75 : 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
