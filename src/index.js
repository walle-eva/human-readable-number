module.exports = function toReadable (number) {
  let unit = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};

let dozens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy',
8: 'eighty', 9: 'ninety', 100: 'one hundred'}

let result;

if(number < 20){
  result = unit[number]
}
if((number >= 20) && (number < 100)){
  result = dozens[('' + number)[0]] + ' ' + unit[('' + number)[1]];
}
if((n >= 100) && (n < 1000)){
  result = unit[('' + number)[0]]  + ' hundreds ' + dozens[('' + number)[1]] + ' ' + unit[('' + number)[2]];
}
return result;
}
