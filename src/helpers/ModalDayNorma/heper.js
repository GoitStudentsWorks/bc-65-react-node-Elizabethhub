export const radioInputs = [
  {
    value: 'woman',
    label: 'For woman',
  },
  {
    value: 'man',
    label: 'For man',
  },
];

export const genderDescription = [
  {
    gender: 'woman',
    massRate: '0,03',
    timeRate: '0,4',
  },
  {
    gender: 'man',
    massRate: '0,04',
    timeRate: '0,6',
  },
];

export const textData = {
  hint: 'V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)',
  time: ' The time of active participation in sports or other activities with a high physical load in hours:',
  rate: 'Calculate your rate: ',
  weight: 'Your weight in kilograms:',
  waterAmount: 'The required amount of water in liters per day:',
  howMuch: 'Write down how much water you will drink:',
};

export const parserToNumber = (str) => {
  const toPoint = str.split(',').join('.');
  return +toPoint;
};

export function handleInput(e, setterFunction) {
  const letterLimit = e.target.name === 'mass' ? 6 : 4;
  const inputQuery = e.target.value;
  const regex = /^-?[0-9]*\.?[0-9]*$/;
  if (regex.test(inputQuery)) {
    setterFunction(inputQuery.replace(/^0(?=\d)/g, '').slice(0, letterLimit));
  }
}
