// 1. feladat
console.log("Szeretnék megtanulni programozni");

// 2. feladat
const favoriteProgammingLanguage = 'javascript';
console.log(favoriteProgammingLanguage);

// 3. feladat
const firstNumber = 10;
const secondNumber = 12;
console.log(firstNumber * secondNumber);

// 4. feladat
const statementNumber = 13;

if (statementNumber % 2 === 0) {
    console.log('Páros vagyok');
} else {
    console.log('Páratlan vagyok');
}

// 5. feladat
let i = 1;
while (i <= 10) {
    console.log(`${i}, Hazudni bűn. 😺`);
    i++;
    // i+= 1;
    // i = i + 1;
    // WINDOWS: CTRL + ALT + 7 backtick ``
}

// 6. feladat
for (let j = 10; j <= 500; j ++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

for (let k = 10; k <= 500; k += 2) {
    console.log(k);
}

// 7. feladat
function greeting(name) {
    return 'Hello ' + name;
}

console.log(greeting('Bence'));

// 8. feladat
function sum(first, second) {
    return first + second;
}

const sumArrowFunction = (first, second) => {
    return first + second;
};

const sumArrow = (first, second) => first + second;

// Palindrome

function isPalindrome(palindrome) {
    const withoutSpace = palindrome.split(' ').join('');
    const reversedString = withoutSpace.split('').reverse().join('');
    return withoutSpace === reversedString;
}

console.log(isPalindrome('a cápa ette apáca'));
