import { GameHomeScreen, GameOverScreen, GameStartScreen } from "@src/screens";
import { NavigationScreenProps } from "@src/types";

export const NAVIGATION_SCREEN: NavigationScreenProps[] = [
  {
    name: "gameHome",
    component: GameHomeScreen,
  },
  {
    name: "gameStart",
    component: GameStartScreen,
  },
  {
    name: "gameOver",
    component: GameOverScreen,
  },
];
