import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { LoggingContainerProps } from "@src/types";
import GuessLogItem from "./GuessLogItem";
import EmptyList from "./EmptyList";

export default function LoggingContainer({
  dataNumber,
}: LoggingContainerProps) {
  return (
    <FlatList
      style={styles.list}
      data={dataNumber}
      renderItem={({ item, index }) => (
        <GuessLogItem
          guessNumber={item}
          roundNumber={dataNumber.length - index}
        />
      )}
      keyExtractor={(item) => item.toString()}
      ListEmptyComponent={<EmptyList />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 16,
  },
});
