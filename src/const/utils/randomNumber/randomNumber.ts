import { BoundariesStateProps } from "@src/types";

export const MINIMUM_BOUNDARIES = 1;
export const MAXIMUM_BOUNDARIES = 100;

export const BOUNDARIES_INTIAL_STATE: BoundariesStateProps = {
  max: MAXIMUM_BOUNDARIES,
  min: MINIMUM_BOUNDARIES,
};
