import { ReactElement } from "react";

export type RootStackParamList = {
  gameHome: undefined;
  gameStart: {
    inputNumber: number;
  };
  gameOver: {
    userNumber: number;
    roundsNumber: number;
  };
};

export interface NavigationScreenProps {
  name: keyof RootStackParamList;
  component(props?: object): ReactElement;
}
