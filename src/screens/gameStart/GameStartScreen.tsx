import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Card, Instruction, PrimaryButton, Title } from "@src/components";
import { GameScreenProps } from "@src/types";
import { generateRandomBetween } from "@src/utils";
import { COLORS } from "@src/color";
import { BOUNDARIES_INTIAL_STATE } from "@src/const";
import {
  LoggingContainer,
  NumberContainer,
  SmallNumberContainer,
} from "./components";

export default function GameStartScreen({
  route,
  navigation,
}: GameScreenProps) {
  const { inputNumber } = route.params;

  const [showModal, setShowModal] = useState(false);

  const { height } = useWindowDimensions();

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
      <Modal
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
        visible={showModal}
      >
        <View
          style={{
            height: 430,
            backgroundColor: COLORS.primary700,
          }}
        >
          <LoggingContainer dataNumber={guessRounds} />
        </View>
      </Modal>
      <Title>Opponent's Guess</Title>
      {height > 430 && (
        <NumberContainer>{currentGuess.toString()}</NumberContainer>
      )}
      <Card style={[styles.card, { width: height > 350 ? "100%" : 200 }]}>
        <Instruction>Higher or lower ?</Instruction>

        {height <= 430 ? (
          <SmallNumberContainer
            guessedNumber={currentGuess}
            onMinus={() => getNextGuess("lower")}
            onPlus={() => getNextGuess("greater")}
          />
        ) : (
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
        )}
      </Card>
      {height < 430 ? (
        <PrimaryButton onPress={() => setShowModal(true)}>
          Show Log
        </PrimaryButton>
      ) : (
        <LoggingContainer dataNumber={guessRounds} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    rowGap: 20,
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
    columnGap: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  card: {
    rowGap: 12,
  },
});
