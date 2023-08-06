export function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    if (max - min === 1) {
      return randomNumber;
    }
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}
