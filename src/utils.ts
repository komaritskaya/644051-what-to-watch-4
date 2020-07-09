export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomNumberWithDecimals = (min, max, decimals) => {
  return ((Math.random() * (max - min)) + min).toFixed(decimals);
};

export const getRandomBool = () => {
  return Math.random() < 0.5;
};

export const getSingleRandomItemFromArray = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)];
};

export const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getMultipleRandomItemsFromArray = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (getRandomBool()) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0) {
    newArr.push(getSingleRandomItemFromArray(arr));
  }
  return newArr;
};
