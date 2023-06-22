Text Analyzer Project

Describe: wordCounter()

<!-- first test -->
Test: "It should return 1 if a passage has just one word."
Code: 
const text = "hello";
wordCounter(text);
Expected Output: 1

<!-- second test -->
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

<!-- third test --> 
Test:  "It should return 3 for passage with three words."
Code: const text = "word word word";
wordCounter(text);
Expected Output: 3

<!-- fourth test -->
Test: "It should return 3 for passage with three words and one number."
Code: const text = "there are 17 cats";
Expected Output = 3

