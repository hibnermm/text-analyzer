// test#1
function wordCounter(word) {
  const wordsArray = word.split(" ").length;
  return wordsArray;
};
console.log(wordCounter("hi"));
//console.log(wordCounter("hi yo holler ")); 
//returns 4 

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
  if(text.trim().length === 0){
    return 0;
  }
  let sumWords = 0;
  let wordsArray = text.split(" "); //new array
  wordsArray.forEach(x => {
    if(!Number(x)){  //if x is not number 
      sumWords++;
    }
  });
  return sumWords;
};
console.log(wordCounter("there are 17 cats"));
//console.log(wordCounter("there are 17 cats  "));  
//returns 5...i d k


//test #5  " blank "
//if only split, foreach, return sum => 2
//add length test first, if true will return and stop executing
//add most important first, return to send up value and exit function
//continues to return 2, length seems to count spaces
function wordCounter(text){
  if(text.trim().length === 0){
    return 0;
  }
    let sumWords = 0;
    const wordsArray = text.split(" ");
    wordsArray.forEach(word => {
      sumWords++;
    });
    return sumWords;
}

console.log(wordCounter(" "));


//test #6
//use trim to remove spaces
//why does it work in devtools but not output
function wordCounter(text){
  if (text.trim().length === 0){
    return 0;
  }
    let sumWords = 0;
    const wordsArray = text.split(" ");
    wordsArray.forEach(x => { 
      sumWords++;
    });
    return sumWords; //remember to return
  }
wordCounter("       ");

//test #7
function uniqueCounterExcerpt(word, excerpt){
  if(word != excerpt){
    return 0;
  }
}
console.log(uniqueCounterExcerpt("yo", " "));

//test 8
//why start with === instead of !=?  
function uniqueCounterExcerpt(word, excerpt){
  if(word === excerpt){
    return 1;
  }else{
    return 0;
  }
}
console.log(uniqueCounterExcerpt("yo", "yo"));


//test 9
function uniqueCounterExcerpt(word, excerpt){
  if(word === excerpt){
    return 1;
  }else{
    return 0;
  }
}
console.log(uniqueCounterExcerpt("yo", "holler"));

//test 10
function uniqueCounterExcerpt(word, excerpt){
  excerptArray = excerpt.split(" ");
  let sumWords = 0;
  excerptArray.forEach(i => {
    if(word === i){
      sumWords++;
    }
    });
  return sumWords;
}
console.log(uniqueCounterExcerpt("yo", "yo holler what yup yo yo"));


//test 11
function uniqueCounterExcerpt(word, excerpt){
  const excerptArray = excerpt.split(" ");
  let sumWords = 0;
  excerptArray.forEach(i => {
    //put method within conditional, more concise
    if(word.toLowerCase() === i.toLowerCase()){
      sumWords++;
    }
  });
  return sumWords;
}
console.log(uniqueCounterExcerpt("yo", "yo holler what yup yo Yo"));

//test 12
//includes method will help you find string within
//returns true or false

const word = "yo"
const excerpt = "yo? holler. what, yup yo! Yo"
console.log(excerpt.includes(word));

function uniqueCounterExcerpt(word, excerpt){
  const excerptArray = excerpt.split(" ");
  let sumWords = 0;
  excerptArray.forEach(i => {
    let iLC = i.toLowerCase();
    let wordLC = word.toLowerCase();
    if(iLC.includes(wordLC)){
      sumWords++;
    }
  });
  return sumWords;
}
console.log(uniqueCounterExcerpt("yo", "yo? holler. what, yup yo! Yo"));

//write more concisely:  (element.toLowerCase().includes(word.toLowerCase())) 
//.length doesn't work since it counts punctuation against, not sure how to ignore puncutation


//test 13
function wordOmit(words, excerpt){

}
 
//slow down -> don't start here...
words = ["zoinks", "mUppetteer", "biffaroni", "loopdaloP"]
excerpt = "Lorem ipsum zoinks dolor sit amet consectetur biffaroni adipisicing elit, Zoinks. Praesentium aliquid, muppetteer, pariatur modi veritatis maiores asperiores biffaroni omnis odit molestiae aut doloribus loopdalop."

wordOmit(words, excerpt);