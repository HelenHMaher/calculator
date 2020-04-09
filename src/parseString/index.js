export const parseString = (string) => {
  const newString = string.replace("x", "*");
  return eval(newString);
};

export default parseString;
