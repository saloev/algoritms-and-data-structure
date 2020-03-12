function getRandomIntInclusive(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRangeIntInclusive(length = 100, min?: number, max?: number): Array<number> {
    const res: Array<number> = [];
    for (let i = 0; i < length; i += 1) {
        res.push(getRandomIntInclusive(min, max));
    }

    return res;
}

function getRandomIntNotInArrayRange(arr: Array<number>): number {
    let number = 0;
    const isInArray = arr.some((elem) => elem === number);
    do {
        number = getRandomIntInclusive()
    } while (isInArray);
    
    return number;
}

export {
    getRandomIntInclusive,
    getRandomRangeIntInclusive,
    getRandomIntNotInArrayRange,
}