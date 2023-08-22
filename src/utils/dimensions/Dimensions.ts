import { GUIDE_LINE_BASE_HEIGHT, GUIDE_LINE_BASE_WIDTH } from "@src/const";
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
export function horizontalScale(size: number) {
  return (getDeviceWidth() / GUIDE_LINE_BASE_WIDTH) * size;
}

export function verticalScale(size: number) {
  return (getDeviceHeight() / GUIDE_LINE_BASE_HEIGHT) * size;
}

export function moderateScale(size: number, factor?: number) {
  const factorValidation = factor || 0.5;
  return size + (horizontalScale(size) - size) * factorValidation;
}
