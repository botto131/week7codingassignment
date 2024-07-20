/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastElement = ages[ages.length - 1] - ages[0];
ages.push(99);
let difference = ages[ages.length - 1] - ages[0];
console.log(`Difference between new last and first element: ${difference}`);

let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

let averageAge = totalAge / ages.length;
console.log(`Average age: ${averageAge.toFixed(2)}`);


/*Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/

let names = ['Sam', 'Tommy', 'Tom', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let i = 0; i < names.length; i++) { //this is the loop that iterates and calculates the avg # of letters in name 
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log(`Average number of letters per name: ${(totalLetters / names.length).toFixed(2)}`);
let concatenatedNames = '';
for (let i = 0; i < names.length; i++) { //this is my loop to concatenate all the names together
    concatenatedNames += names[i] + ' ';
}
console.log(`Concatenated names: ${concatenatedNames}`); //this is to print the output 
/*How do you access the last element of any array?*/
let lastElementOfArray = names[names.length - 1];

/*How do you access the first element of any array?*/
let firstElementOfArray = names[0];

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:*/
/*let names = ["Kelly", "Sam", "Kate"];    // starting with this array*/
/*let nameLengths = [5, 3, 4];             // create a new array*/

let names2 = ["Kelly", "Sam", "Kate"]; //
let nameLengths = [];
for (let i = 0; i < names2.length; i++) { //a for loopto iterate over the prev names array. And that adds the length of each name 
    nameLengths.push(names2[i].length);
}
console.log(nameLengths);


/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let sumOfNamesLength = 0;
for (let i = 0; i < nameLengths.length; i++) { //this for loop is calculating the sum of the elements in the array
    sumOfNamesLength += nameLengths[i];
}
console.log(`Total length of all names: ${sumOfNamesLength}`); // this is the output of the above for loop 
/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
function concatenateWord(word, n) { //this is the function that takes two parameters, and passes in the two arguments 
    let concatenatedWord = '';
    for (let i = 0; i < n; i++) {
        concatenatedWord += word;
    }
    return concatenatedWord;
}
console.log(concatenateWord('Hello', 3)); //this puts it in the console 3 times 
/*Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/
function fullName(firstName, lastName) { 
    return `${firstName} ${lastName}`;  //this is the return of the function and the back ticks and ${} are syntax for javascripts template literals 
}
console.log(fullName('John', 'Doe'));
/*Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}
let numbers = [10, 55, 6, 5];
console.log(isSumGreaterThan100(numbers)); //checking to see if function works
/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
function avgOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let numbers2 = [10, 55, 6, 5]; //testing the function
console.log(avgOfNumbers(numbers2)); //checking to see if function works 
/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
function isFirstArrayAverageGreater(firstArray, secondArray) {
    const averageFirstArray = firstArray.reduce((acc, curr) => acc + curr, 0) / firstArray.length; //this line of code is calculating the avgof the first array
    const averageSecondArray = secondArray.reduce((acc, curr) => acc + curr, 0) / secondArray.length; //this line of code is calculating avg second array
    return averageFirstArray > averageSecondArray;
}
let firstArray = [10, 10550, 6, 5];
let secondArray = [5, 5, 1555, 500];
console.log(isFirstArrayAverageGreater(firstArray, secondArray)); //checking to see if function works
/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 5.50)); //checking to see if function will work 
/*Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/
/* for this problem I created a function that finds the average sales for the day, I chose this because I work in sales currently*/
function calculateAverageOrderTotal(sales) {
    if (sales.length === 0) {
        throw new Error("The array must contain at least one sale.");
    }

    // here is where it calculates the sum of the sales totals
    const total = sales.reduce((acc, curr) => acc + curr, 0);

    // this is the formula used to calculate the average of all sales throughout the day
    const average = total / sales.length;

    return average;
}

// Examples of using the function
console.log(calculateAverageOrderTotal([100, 200, 150, 300, 250, 1500])); 
console.log(calculateAverageOrderTotal([50, 75, 100, 125, 150])); 
console.log(calculateAverageOrderTotal([10, 20, 30, 40, 50])); 