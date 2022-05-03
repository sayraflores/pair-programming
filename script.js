// Easy (1)

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var even = [];
var odd = [];

function evenNumbers(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            even.push(num[i]);
        } else {
            odd.push(num[i]);
        }
    }
}

evenNumbers(num);
console.log(even);
console.log(odd);

// Easy (2)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const prime = numbers.filter(primeNumbers);

console.log(prime);

function primeNumbers(input) {
    if (input < 2) return false;
    for (let i = 2; i < input; i++) {
        if (input % i == 0) {
            return false;
        }
    }
    return input;
}


// MEDIUM(1)
// var vowels = ["a", "e", "i", "o", "u", "y"];

// function vowelChecker (letter) {
//     for(let i = 0; i < vowels.length; i++) {
//         if (letter == vowels[i] ) {
//             console.log("This is a vowel");
//         } 
//         else {
//             console.log("This is not a vowel");
//             // return;
//         }
//     }
// }
function vowelChecker(letter) {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "y") {
        console.log("This is a vowel")
    } else {
        console.log("This is not a vowel")
    }
}

console.log(vowelChecker("t"));

// MEDIUM (2)
function anagramChecker(string1, string2) {
    string1 = string1.replace(/[^\w]/g, '').toLowerCase();
    string2 = string2.replace(/[^\w]/g, '').toLowerCase();

    // const characterMapA = getCharacterMap(string1);
    // const characterMapB = getCharacterMap(string2);

    let string1A = string1.split("").sort().join('');
    let string2A = string2.split("").sort().join('');

    // console.log(string1A);
    // console.log(string2A);
    if (string1A !== string2A) {
        return false;
    } else {
        return true;
    }

}

let text = "Things are good";
let text2 = "Dogs eat ants";

console.log(anagramChecker(text, text2));