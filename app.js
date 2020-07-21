// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
function print() {
    var ProGrad1 = "The driver's name is Nethravathi";
    console.log(ProGrad1);
    var ProGrad2 = "The navigator's name is Jithin Reddy";
    console.log(ProGrad2);
}


// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1
function char() {
    const str = 'Nethravathi';
    const str1 = 'Jithin Reddy';

    let a = str.length;
    let b = str1.length;

    if (a > b) {
        console.log(str);
    } else {
        console.log(str1)
    }
}
char();


// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
function getVowels(str) {
    var vowelsCount = 0;
    //turn the input into a string
    var string = str.toString();
    //  var str = "Jithin Reddy";
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
            console.log(string.charAt(i));
            // console.log(str);
        }
    }
    return vowelsCount;
}
console.log(getVowels("Jithin Reddy")); // 2 a e


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function Case() {
    let name = "Jithin Reddy";
    //let len;
    var uppercase = 0;
    var lowercase = 0;
    for (var i = 0; i < name.length; i++) {
        if (name[i] >= "a" && name[i] <= "z")
            lowercase++;
        else
            uppercase++;
    }

    console.log("uppercase in " + name + "  " + uppercase);
    console.log("lowercase in " + name + " " + lowercase);
}


// Progression 3: Control Statements - 2
function printchar() {
    var ProGrad1 = "Jithin Reddy";
    var ProGrad2 = "Nethravathi";
    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
    var input = ProGrad1.split("");
    var str = " ";
    for (let i = 0; i < input.length; i++) {
        str = str + input[i].toUpperCase() + " ";
    }
    console.log(str);


    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
    function strcmp(ProGrad1, ProGrad2) {
        if (ProGrad1 === ProGrad2) {
            return 0;
        }

        if (ProGrad1 > ProGrad2) {
            return 1;
        }

        return -1;
    }

    console.log(strcmp("Jithin", "Reddy")); // -1


    // console.log(ProGrad1);
    // console.log(ProGrad2);

    var input = ProGrad1.split("");
    var str = " ";
    for (let i = 0; i < input.length; i++) {
        str = str + input[i].toUpperCase() + " ";
        // str.split("").reverse().log();
    }
    console.log(str);

    // 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
    // - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
    console.log(ProGrad1.concat(" ", ProGrad2));
    console.log(ProGrad2.concat(" ", ProGrad1));
}


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function lexicographic() {
    var elements = ['Nethravathi', 'Jithin Reddy'];
    a = elements.sort((a, b) => a.localeCompare(b));

    // Returning sorted elements 
    console.log(a);
}


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 