export const htmlDate = addDays => {
  const now = new Date().getTime();
  const futureTime = now + 1000 * 60 * 60 * addDays;
  const futureDate = new Date(futureTime);
  const year = futureDate.getFullYear();
  const tempMonth = futureDate.getMonth() + 1;
  const month = tempMonth < 10 ? `0${tempMonth}` : tempMonth;
  const tempDay = futureDate.getDay();
  const day = tempDay < 10 ? `0${tempDay}` : tempDay;
  return `${year}-${month}-${day}`;
};

export const average = (arr, numberProp) =>
  arr.length === 0
    ? 0
    : (arr.reduce((sum, el) => sum + el[numberProp], 0) / arr.length).toFixed(
        0,
      );

export const holdColorDictionary = {
  '#a61901': 'Red',
  '#ce7801': 'Orange',
  '#fffe06': 'Yellow',
  '#48ac10': 'Green',
  '#0433ff': 'Blue',
  '#531b93': 'Purple',
  '#565656': 'Black',
  '#ededed': 'White',
};
