# Project: Text Analyzer

##### By Melissa Hibner

---

## Description

_This project consists of a text analyzer template._

## Technologies Used

- HTML
- CSS
- Javascript

## Setup/Installation Requirements

1. Go to github repository.
2. Select "<> Code" button.
3. Copy repository url.
4. Git clone repository url to desktop: `$git clone url`.
5. Open index.html in a browser.

## Known Bugs

#### _There are no known bugs. _

---

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2023, Melissa Hibner

---

## Tests

<!-- word counter -->
Describe: wordCounter()
<!--test#1 -->
Test: should return 1 if one word
Code: wordCounter("hi");
Expected Output: 1

<!-- test#2 -->
Test: return 2 if has two words
Code: wordCounter("hey buddy);
Expected Output: 2

<!--test#3 --> 
Test:  return 3 if has three words
Code: wordCounter("bird bird bird");
Expected Output: 3

<!-- test#4 -->
Test: return 3 if has three words and one number
Code: wordCounter("there are 17 cats");
Expected Output = 3

<!-- test #5 -->
Test: It should return 0 for empty string
Code: wordCounter(" ");
Expected output: 0; 

<!-- test #6 -->
Test: return 0 for only empty spaces in string
Code: wordCounter("         ");
Expected output:  0;


<!-- unique word count -->
Describe: uniqueCounterExcerpt();
<!-- test 7 -->
test: return 0 if empty excerpt string
code: uniqueCount(word, excerpt)
const word = "yo"
const excerpt = " ";
expected output: 0

<!-- test 8 -->
test: return 1 if excerpt string contains one instance of word
const word = "yo"
const excerpt = "yo"
expected output: 1;

<!-- test 9 -->
test: return 0 if excerpt string contains different item than word
const word = "yo"
const excerpt = "holler"

<!-- test 10 -->
test: returns # that matches word freq given excerpt
const word = "yo"
const excerpt = "yo holler what yup yo yo"

<!-- test 11 -->
test: returns # that matches word freq regardless of capitalization given excerpt freq
const word = "yo"
const excerpt = "yo holler what yup yo Yo"



<!-- test 12 -->
test: returns # that matches word freq regardless of punctuation given excerpt freq
const word = "yo"
const excerpt = "yo? holler. what, yup yo! Yo"

<!-- test 13 -->
1. function identifies word = value in excerpt
...series of tests
split into array
2. splices to remove, join into string

<!-- test 14 -->
1. function identifies word is present in array 


<!-- example 1 -->