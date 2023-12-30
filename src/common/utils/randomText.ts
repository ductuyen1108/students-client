export const randomText = (inputString: string): string => {
  const getRandomChar = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const resultString = inputString.split('').map(getRandomChar).join('');
  return resultString;
};
