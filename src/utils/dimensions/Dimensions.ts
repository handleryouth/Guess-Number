import { Dimensions } from "react-native";

export function getDeviceWidth() {
  return Dimensions.get("window").width;
}

export function getDeviceHeight() {
  return Dimensions.get("window").height;
}

export function getFullDeviceWidth() {
  return Dimensions.get("screen").width;
}

export function getFullDeviceHeight() {
  return Dimensions.get("screen").height;
}
