import React, { useCallback, useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { GameHomeScreenProps } from "@src/types";
import { COLORS } from "@src/color";
import { Card, Instruction, PrimaryButton, Title } from "@src/components";

export default function GameHomeScreen({ navigation }: GameHomeScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const resetInputHandler = useCallback(() => {
    setEnteredNumber("");
  }, []);

  useFocusEffect(resetInputHandler);

  const confirmInputHandler = useCallback(() => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    navigation.navigate("gameStart", {
      inputNumber: choosenNumber,
    });
  }, [enteredNumber, navigation, resetInputHandler]);

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number !</Title>
      <Card>
        <Instruction>Enter a number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={(text) => {
            setEnteredNumber(text);
          }}
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
