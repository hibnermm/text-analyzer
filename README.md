Text Analyzer Project

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