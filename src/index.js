//module.exports = 
module.exports = function toReadable (number) {
    let object = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
      };  
      if(number <= 20) {
          return object[number]
      }
      else if (number <= 100) {
          let helpNum = number % 10;
          if(helpNum === 0) {
              return object[number]
          }
          number-=helpNum;
          return `${object[number]} ${object[helpNum]}`
    } else {
        let hundredths = number % 100;
        if(hundredths === 0) {
            return `${object[number]}`;
        }
        if(hundredths <= 20 ) {
            number-=hundredths;
            console.log(number)
            return `${object[number]} ${object[hundredths]}`
        }
        console.log(hundredths)
        number-=hundredths;
        let dozens = hundredths % 10;
        let helpNum = hundredths - dozens;
        if(dozens === 0 ){
            return `${object[number]} ${object[helpNum]}`
        }
        return `${object[number]} ${object[helpNum]} ${object[dozens]}`
    }
}
