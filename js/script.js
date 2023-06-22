// test#1
function wordCounter(word) {
  return 1;
};
console.log(wordCounter("hi"));

/// test#2a
//split creates array, then takes length
function wordCounter(text) {
  let sumWords = 0;
  let wordsArray = text.split(" ").length;
  sumWords+= wordsArray;
  return sumWords;
};
console.log(wordCounter("hey buddy"));

// test#2b, another way
//split makes array, then run for each loop
//each time it runs through loop for value[i], then ticks up counter
//const - values inside don't change...?
//let - ? it updates?
function wordCounter(text){
  let sumWords = 0;
 const wordsArray = text.split(" ");
  wordsArray.forEach(word => {
    sumWords++;
  });
  return sumWords;
}
console.log(wordCounter("wellllll hi"));

// test#3
function wordCounter(text){
  let sumWords = 0;
  const wordsArray = text.split(" ");
  wordsArray.forEach(word => {
    sumWords++;
  });
  return sumWords;
};
console.log(wordCounter("bird bird bird"));

/// test#4
function wordCounter(text){
  let sumWords = 0;
  for(let i = 0; i < text.length; i++){
    let number = text.charCodeAt(i);
    if()
  }
};
wordCounter("there are 17 cats");



