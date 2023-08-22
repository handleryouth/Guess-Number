import React, { useCallback, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { GameHomeScreenProps } from "@src/types";
import { COLORS } from "@src/color";
import { Card, Instruction, PrimaryButton, Title } from "@src/components";
import { horizontalScale, useDimensions } from "@src/utils";

export default function GameHomeScreen({ navigation }: GameHomeScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { verticalScale } = useDimensions();

  const { height } = useWindowDimensions();

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
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior="position" style={styles.screen}>
        <View
          style={[
            styles.rootContainer,
            {
              height,
              rowGap: verticalScale(30),
              marginHorizontal: horizontalScale(30),
            },
          ]}
        >
          <Title>Guess my number !</Title>
          <Card
            style={{
              rowGap: 30,
            }}
          >
            <Instruction>Enter a number</Instruction>
            <TextInput
              style={[
                styles.numberInput,
                {
                  fontSize: height > 430 ? 50 : 40,
                },
              ]}
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
              <PrimaryButton style={styles.button} onPress={resetInputHandler}>
                Reset
              </PrimaryButton>

              <PrimaryButton
                style={styles.button}
                onPress={confirmInputHandler}
              >
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberInput: {
    fontSize: 22,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    columnGap: 12,
  },
  button: {
    flex: 1,
  },
});
