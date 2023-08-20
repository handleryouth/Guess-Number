import React, { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Card, Instruction, PrimaryButton, Title } from "@src/components";
import { BoundariesStateProps, GameScreenProps } from "@src/types";
import { generateRandomBetween } from "@src/utils";
import { LoggingContainer, NumberContainer } from "./components";

export const MINIMUM_BOUNDARIES = 1;
export const MAXIMUM_BOUNDARIES = 100;

export const BOUNDARIES_INTIAL_STATE: BoundariesStateProps = {
  max: MAXIMUM_BOUNDARIES,
  min: MINIMUM_BOUNDARIES,
};

export default function GameStartScreen({
  route,
  navigation,
}: GameScreenProps) {
  const { inputNumber } = route.params;

  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  const [boundaries, setBoundaries] = useState(BOUNDARIES_INTIAL_STATE);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(boundaries.min, boundaries.max, inputNumber)
  );

  useEffect(() => {
    if (currentGuess === inputNumber) {
      navigation.navigate("gameOver", {
        roundsNumber: guessRounds.length,
        userNumber: inputNumber,
      });
    }
  }, [currentGuess, guessRounds, inputNumber, navigation]);

  const getNextGuess = useCallback(
    (direction: "lower" | "greater") => {
      let minimumBoundaries = boundaries.min;
      let maximumBoundaries = boundaries.max;

      if (
        (direction === "lower" && currentGuess < inputNumber) ||
        (direction === "greater" && currentGuess > inputNumber)
      ) {
        Alert.alert("Don't lie!", "You know that this is wrong...", [
          { text: "Sorry!", style: "cancel" },
        ]);
        return;
      }

      if (direction === "lower") {
        setBoundaries((prevState) => ({
          ...prevState,
          max: currentGuess,
        }));
        maximumBoundaries = currentGuess;
      } else {
        setBoundaries((prevState) => ({
          ...prevState,
          min: currentGuess + 1,
        }));
        minimumBoundaries = currentGuess + 1;
      }

      const newRandomNumber = generateRandomBetween(
        minimumBoundaries,
        maximumBoundaries,
        currentGuess
      );
      setCurrentGuess(newRandomNumber);
      setGuessRounds((prevState) => [...prevState, currentGuess]);
    },
    [boundaries, currentGuess, inputNumber]
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess.toString()}</NumberContainer>
      <Card>
        <Instruction style={styles.instructionText}>
          Higher or lower ?
        </Instruction>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => getNextGuess("lower")}>
              <FontAwesome name="minus" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => getNextGuess("greater")}>
              <FontAwesome name="plus" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <LoggingContainer dataNumber={guessRounds} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
