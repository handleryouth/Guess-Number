import { useCallback } from "react";
import { useWindowDimensions } from "react-native";
import { GUIDE_LINE_BASE_HEIGHT, GUIDE_LINE_BASE_WIDTH } from "@src/const";

export function useDimensions() {
  const { width, height } = useWindowDimensions();

  const horizontalScale = useCallback(
    (size: number) => {
      return (width / GUIDE_LINE_BASE_WIDTH) * size;
    },
    [width]
  );

  const verticalScale = useCallback(
    (size: number) => {
      return (height / GUIDE_LINE_BASE_HEIGHT) * size;
    },
    [height]
  );

  const moderateScale = useCallback(
    (size: number, factor?: number) => {
      const factorValidation = factor || 0.5;
      return size + (horizontalScale(size) - size) * factorValidation;
    },
    [horizontalScale]
  );

  return {
    horizontalScale,
    verticalScale,
    moderateScale,
  };
}
