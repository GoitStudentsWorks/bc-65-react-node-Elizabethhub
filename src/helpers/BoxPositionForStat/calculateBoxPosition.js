const rowHeight = {
    sm: 68,
    md: 74,
  },
  rowLength = {
    sm: 5,
    md: 10,
  },
  columnWidth = { md: 69, xl: 56 };

export const calculateBoxPositionY = (dayNumber, screen) => {
  const number = dayNumber / rowLength[screen],
    floorNumber = Math.floor(number);

  switch (screen) {
    case 'sm':
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen] - 12
        : parseInt(number) * rowHeight[screen] - 12;
    case 'md':
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen]
        : parseInt(number) * rowHeight[screen];
    default:
      return 0;
  }
};

export const calculateBoxPositionX = (dayNumber, screen) => {
  const [number, isLeftSide] =
    dayNumber % 10 === 0
      ? [9, false]
      : [(dayNumber % 10) - 1, dayNumber % 10 < 5];

  return isLeftSide
    ? number * columnWidth[screen] + columnWidth[screen] / 4
    : number * columnWidth[screen] - 280 + columnWidth[screen] / 4;
};
