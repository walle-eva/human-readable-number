module.exports = function toReadable (number) {
  let unit = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight',
9: 'nine', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};

let dozens = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy',
8: 'eighty', 9: 'ninety', 100: 'one hundred'}

let result = '';

if(number < 20){
  result = unit[number]
}
if(number % 10 == 0){
  result = dozens[('' + number)[0]];
}
if((number >= 20) && (number < 100) && (number % 10)){
  result = dozens[('' + number)[0]] + ' ' + unit[('' + number)[1]];
}
if((number >= 100) && (number < 1000) && (number % 10 == 0)){
  result = unit[('' + number)[0]]  + ' hundred ' + dozens[('' + number)[1]];
}
if((number >= 100) && (number < 1000) && (number % 10)){
  result = unit[('' + number)[0]]  + ' hundred ' + dozens[('' + number)[1]] + ' ' + unit[('' + number)[2]];
}
    if((('' + number)[1] == 0) && (number > 100)){
	result = unit[('' + number)[0]]  + ' hundred ' + unit[('' + number)[2]];
}
if((('' + number)[1] == 1) && (number > 100) ){
	result = unit[('' + number)[0]]  + ' hundred ' + unit[('' + number)[1]+('' + number)[2]];
}
if(number % 100 == 0){
	result = unit[('' + number)[0]]  + ' hundred';
}
return result;
}
