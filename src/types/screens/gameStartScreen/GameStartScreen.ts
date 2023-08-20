import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

export interface BoundariesStateProps {
  min: number;
  max: number;
}

export interface GuessLogItemProps {
  roundNumber: number;
  guessNumber: number;
}

export interface LoggingContainerProps {
  dataNumber: number[];
}

export interface NumberContainerProps {
  children: string;
}

export type GameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "gameStart"
>;
