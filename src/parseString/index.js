export const parseString = (string) => {
  const newString = string.replace(/[x]/g, "*");
  return Math.round(1000000000 * eval(newString)) / 1000000000;
};

export default parseString;
