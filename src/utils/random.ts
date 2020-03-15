function getRandomIntInclusive(min = 0, max = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRangeIntInclusive(
  length = 100,
  min?: number,
  max?: number
): number[] {
  const res: number[] = [];
  for (let i = 0; i < length; i += 1) {
    res.push(getRandomIntInclusive(min, max));
  }

  return res;
}

function getRandomIntNotInArrayRange(arr: number[], min = 150, max = 160): number {
  let numb = 0;
  const isInArray = arr.some(elem => elem === numb);
  while (isInArray) {
    numb = getRandomIntInclusive(min, max);
  }

  return numb;
}

export {
  getRandomIntInclusive,
  getRandomRangeIntInclusive,
  getRandomIntNotInArrayRange
};
