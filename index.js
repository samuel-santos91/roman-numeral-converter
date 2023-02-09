const convertToRoman = (num) => {
  const roman = [
    {},
    { 1: "I", 4: "IV", 5: "V", 9: "IX" }, //1, 4, 5, 9
    { 1: "X", 4: "XL", 5: "L", 9: "XC" }, //10, 40, 50, 90
    { 1: "C", 4: "CD", 5: "D", 9: "CM" }, //100, 400, 500, 900
    { 1: "M" }, //1000
  ];

  let symbols = [];
  const numberLength = num.toString().length;

  if (num <= 0 || num > 3999) {
    return "Type a number between 0 and 3999";
  } else {
    //Loop to go through digits
    for (let j = 1; j <= num.toString().length; j++) {
      if (
        num.toString().charAt(numberLength - j) >= 1 &&
        num.toString().charAt(numberLength - j) <= 3
      ) {
        let result = "";
        for (let i = 0; i < num.toString().charAt(numberLength - j); i++) {
          result = roman[j]["1"] + result;
        }
        symbols.push(result);
      } else if (num.toString().charAt(numberLength - j) == 4) {
        symbols.push(roman[j]["4"]);
      } else if (num.toString().charAt(numberLength - j) == 5) {
        symbols.push(roman[j]["5"]);
      } else if (
        num.toString().charAt(numberLength - j) >= 6 &&
        num.toString().charAt(numberLength - j) <= 8
      ) {
        let result = "";
        for (let i = 0; i < num.toString().charAt(numberLength - j) - 5; i++) {
          result = roman[j]["1"] + result;
        }
        symbols.push(roman[j]["5"] + result);
      } else if (num.toString().charAt(numberLength - j) == 9) {
        symbols.push(roman[j]["9"]);
      }
    }
    return console.log(symbols.reverse().join(""));
  }
}

//ADD NUMBER TO BE CONVERTED AND CALL FUNCTION

convertToRoman("number")