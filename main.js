//task 1 and 2
let arr = [2, 6, 100, 78, 90, 23, 56, 9, 26, 77];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min){
        min = arr[i];
    }
    if (arr[i] > max){
        max = arr[i];
    }
}
console.log('Min number is ' + min);
console.log('Max number is ' + max);
let firstNumber = arr.shift();
arr.push(firstNumber);
console.log(arr);

//task3 
let numbers = [74, 65, 54, 43, 32, 21, 59, 67, 16, 12];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);
let sum = minNumber + maxNumber;
console.log("Sum of min and max of the array is: " + sum);

//task4
let randomNumbers = [50, 45, 12, 43, 34, 23, 13, 18, 19, 29];
for (let i = 0; i < randomNumbers.length; i++) {
    sum += numbers[i];
}
console.log("the sum of elements of the array is " + sum);

//task5
let fiveNumbers = [67, 54, 43, 23, 6];
const [firstnumber, secondnumber, thirdnumber, forthnumber, fifthnumber] =fiveNumbers;
console.log(forthnumber);

//task6
let sentence = 'Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.';
let sentenceWithoutPunctuation = sentence.replace(/[.,:;!?]/g, '');
let words = sentenceWithoutPunctuation.split(/\s+/);
words.forEach(word => {
    console.log(word);
});

//task7
let reversedArray = fiveNumbers.reverse();
console.log(reversedArray);

//task8
function isPalindrome(string){
    const stringWithoutPunctuation = string.replace(/\s+/g, '').toLowerCase();
    const reversedStr = stringWithoutPunctuation.split('').reverse().join('');
    return  stringWithoutPunctuation === reversedStr;
}
console.log(isPalindrome("Anna"));
console.log(isPalindrome("Brian"))