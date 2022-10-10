
let bDay = prompt('Which year were you born?');
if(bDay === null){
    alert("Such a pity you don't want to share your age with us...");
}else {
    bDay = parseInt(bDay);
    alert('Your age is - ' + (2022 - bDay) + '\n Or you might be 1 year younger if you were born in the range of 10.10.' + bDay + ' - 31.12.' + bDay);
}
let city = prompt('What city do you live in?');
if(city === null){
    alert("Such a pity you don't want to share the city you live in with us...");
}else {
    switch (city) {
        case 'Kiev':
            alert('You live in the capital of Ukraine');
            break;
        case 'Washington':
            alert('You live in the capital of US');
            break;
        case 'London':
            alert('You live in the capital of GB');
            break;
        default:
            alert('You live in ' + city);
    }
}
let favSport = prompt('What is your favourite sport?');
if(favSport === null){
    alert("Such a pity you don't want to share your favourite sport with us...");
}else {
    switch (favSport) {
        case 'swimming':
            alert("That's cool! Dreaming of becoming Michael Phelps?");
            break;
        case 'boxing':
            alert("That's cool! Dreaming of becoming Mike Tyson?");
            break;
        case 'tennis':
            alert("That's cool! Dreaming of becoming Rafael Nadal?");
    }
}








//1.
// let number1 = prompt('Enter first number');
// let number2 = prompt('Enter second number');
// if (number1 > number2){
//     console.log('First number has higher value');
// }else if(number1 === number2) {
//     console.log('These numbers are equal');
// }
// else{
//     console.log('Second number has higher value');
// }

//2.
// let number1 = prompt('Enter the distance in meters');
// let number2 = prompt('Enter the distance in feet');
// if (number1>(number2*0.305)){
//     console.log('M distance is bigger');
// }else{
//     console.log('Ft distance is bigger');
// }

//3.
// let number1 = prompt('Enter first number');
// let number2 = prompt('Enter second number');
// if (number1 % number2 === 0){
//     console.log('First number is a divider of the second one');
// }else if (number2 % number1 === 0){
//     console.log('Second number is a divider of the first one');
// }else{
//     console.log("You can't divide these two numbers");
// }

//4.
// let number = prompt('Enter your number');
// let lastDigit = number % 10;
// if(lastDigit % 2 === 0){
//     console.log('The last digit is even');
// } else {
//     console.log('The last digit is odd');
// }
// console.log("And the digit is", lastDigit);

//5.
// let number = prompt('Enter a 2-digit number');
// let digit1 = number / 10;
// digit1 = parseInt(digit1);
// let digit2 = number % 10;
// if (digit2 > digit1){
//     console.log('Second digit has higher value than first');
// }else{
//     console.log('First digit has higher value than second');
// }

// 6.
// let number = prompt('Enter a 3-digit number');
// let digit1 = number / 100;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10) % 10;
// digit2 = parseInt(digit2);
// let digit3 = number % 10;
// let sum = digit1 + digit2 + digit3;
// let product = digit1 * digit2 * digit3;
// if(sum % 2 === 0){
//     console.log('The sum of these digits is even');
// }else{
//     console.log('The sum of these digits is odd');
// }
// if(sum % 5 === 0){
//     console.log('The sum can be divided by 5');
// }else{
//     console.log('The sum cannot be divided by 5');
// }
// if(product > 100){
//     console.log('The product is higher than 100');
// }else{
//     console.log('The product is not higher than 100');
// }

//7.
// let number = prompt('Enter a 3-digit number');
// let digit1 = number / 100;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10) % 10;
// digit2 = parseInt(digit2);
// let digit3 = number % 10;
// console.log(digit1, digit2, digit3);
// if(digit1===digit2 && digit1===digit3){
//     console.log('Every digit is equal')
// }else if(digit1===digit2 || digit1===digit3 || digit2===digit3){
//     console.log('Some of these 3 digits are equal');
// }else{
//     console.log('None of these digits are equal')
// }

//8.
// let number = prompt('Enter a 6-digit number');
// let digit1 = number / 100000;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10000) % 10;
// digit2 = parseInt(digit2);
// let digit3 = (number / 1000) % 10;
// digit3 = parseInt(digit3);
// let digit4 = (number / 100) % 10;
// digit4 = parseInt(digit4);
// let digit5 = (number / 10) % 10;
// digit5 = parseInt(digit5);
// let digit6 = number % 10;
// digit6 = parseInt(digit6);
// console.log(digit1, digit2, digit3, digit4, digit5, digit6);
// if(digit1===digit6 && digit2===digit5 && digit3===digit4){
//     console.log('The number is mirrored');
// }else{
//     console.log('The number is not mirrored');
// }
