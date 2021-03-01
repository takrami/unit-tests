export const filterNumbers = (array = [1, 20, 25, 34, 99], largerThan = 25) => {
  const filteredArray = [];
  array.map((number) => {
    if (number <= largerThan) {
      filteredArray.push(number);
    }
  });
  return filteredArray;
};
filterNumbers();
