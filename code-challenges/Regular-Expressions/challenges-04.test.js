'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named isNum that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.

For example:
12345 returns true
'12345' returns true
'h3llo world' returns true
'hello world' returns false
------------------------------------------------------------------------------------------------ */

const isNum = (input) => {
  // Solution code here...

  let isNumber=/[0-9]+/g;
  // console.log(isNumber.test(input));
  // console.log(input);
  // console.log(isNumber ? isNumber.test(input) : false);
  return (isNumber ?  isNumber.test(input):false);
  

  // let isNumber=input.search(/\w\d\^[0-9]+/g);
  // console.log(isNumber);
  //  console.log(input);
  // console.log((isNumber ? true : false));
  // return (isNumber ? true : false);
  // let isNumber=input.search(/\*[0-9]/g);
  // return (isNumber ? true : false);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter. It should only match words, not punctuation.

Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */

const isCapitalized = (str) => {

  let arryCapitalResults=[];
  console.log(arryCapitalResults);
  let spli =str.split(/\s/g);
  console.log(spli);
   spli.forEach((val,ind)=>
   {
  if (val.match(/^[A-Z]+/g)){
    arryCapitalResults.push(val)
    console.log(arryCapitalResults);
    console.log(arryCapitalResults.length);
  }} );	
  return arryCapitalResults ;
  //return splitt.push(val)?val.match(/^[A-Z]+/g):false;

  // Solution code here...
  // let sear=str.search(/\^[A-Z]/g);
  // console.log(sear);
  // let spli =str.split(/\s/g);
  // console.log(spli);
  // let number;
  // let input = "A string with 3 numbers in it... 42 and 88.";
  // let number = /\b\d+\b/g;
  // let number=str.charCodeAt(0);
  // console.log(number);
  // let Letters= spli.forEach(e => 
  //   console.log(e),
  //    number=spli.charCodeAt(0),
  // console.log(number)
  //   );
    // console.log(Letters)
//     console.log(spli.match(/^[a-z]/g));
//     spli.forEach((val,ind)=>
//    {console.log(val,ind);
//     console.log(val==str.match(/\^[A-Z]+/g));
//     console.log(str.match(/[^A-Z]\+/g));
//   if (val===str.match(/^[A-Z]\*/g)){
// splitt.push(val);
// console.log(splitt);
// }} );

    // for(let i=0;i<=str.length;i++){
    //   console.log(str.charAt(i));
    //   if  (str.charAt(i)===str.match(/\^[A-Z]/g)){
    //     str.push(splitt);
    //     console.log(str);
    //   }
    // }


    // let match;
    // console.log(spli);
  // while (match = number.exec(str)) {
  //   console.log("Found", match[0], "at", match.index);
  // }

  // let isCapitalized1=str.search(/^[A-Z]/.search(str));
  // console.log(isCapitalized1);
  // if (spli ===isCapitalized1 ){

  //   let arr1= [isCapitalized1];
  //   console.log(arr1);
  //   return arr1;
//   if( /^[A-Z]/.test(str)){
// str=spli.slice();
  
//   console.log(str);
//   return str;
//   }
// let words = str.matchAll(/^[A-Z]/g)
// console.log(words);
// // if (){
//   console.log(spli.join(' '));
//   return spli.join(' ');
// }


//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() ;   
//     str.forEach(str)  

// console.log(splitStr.join(' '));
// return splitStr.join(' ');
  };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named citiesAtoJ that takes in an array of city names and uses a regular expression pattern to return a new array containing any cities that begin with the letters A through J, inclusive.
------------------------------------------------------------------------------------------------ */

const citiesAtoJ = (arr) => {
  // Solution code here...
  let arrOfCity=[];
  //console.log(arrOfCity);
  let valid=/^[A-J]/g;
  arr.forEach((val,indx)=>{
    if(val.match(valid)){

      arrOfCity.push(val);
      console.log(arrOfCity);
    }
    console.log(arrOfCity);
  });
  //console.log(arrOfCity);
  return arrOfCity;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You have created a game application and begin by asking users an easy question: In which month is Halloween?

Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct

If the user enters any of these four inputs, return true. For any other input, return false.

Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {
  // Solution code here...
  //let valid=/\^(([Oct]ober)|([oct]ober))$/i;
 
 
  //let valid=/^(^\October$)+|^(^\october$)+|^(^\oct$)+|^(^\Oct$)+/g;
 
  let valid=/^[Oo][(ctober)$]/g;

  console.log(input);
  console.log(valid.test(input)?true:false);
  return valid.test(input)?true:false;
 // let invalid=/([^October]|[^Oct]| [^october] | [^oct])/i;
 // console.log(valid);
  //console.log(input);
  //console.log(valid.test(input));
  //console.log(invalid.test(input));
  // if(valid.test(input)){
  //   console.log(input);
  // console.log(valid.test(input));
  // return true;
  // }else {
    // console.log(input);
  // console.log(invalid.test(input));
  //   return false;
  // }
 //return valid?valid.test(input):invalid.test(input);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named noPunctuation that contains a regular expression pattern to find all of the words that contain a space immediately at the end of the word. Return an array of all such words, still containing the space at the end.

For example, if given the string "Hello, and have a wonderful day!", the word "Hello, " would not be returned because it is immediately followed by a comma. The word "day!" would not be returned because it is immediately followed by an exclamation point.

The expected output of "Hello, and have a wonderful day!" is ["and ", "have ", "a ", "wonderful "].
------------------------------------------------------------------------------------------------ */

const noPunctuation = str => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.

Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string, regardless of capitalization, and replace them with an underscore.

The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.

For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */

let hangman = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".

Do not use the vertical bar (pipe) character.

Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = (str) => {
  // Solution code here...

};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-04.solution.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return true if the input is a number', () => {
    expect(isNum(1234567890)).toBeTruthy();
    expect(isNum('12345')).toBeTruthy();
  });
  test('It should return true if the input contains a number', () => {
    expect(isNum('h3llo w0rld')).toBeTruthy();
  });
  test('It should return false if the input does not contain a number', () => {
    expect(isNum('hello world')).toBeFalsy();
    expect(isNum('')).toBeFalsy();
  });
});

describe('Testing challenge 2', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(capitalResult.length).toStrictEqual(5);

    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);

    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});

describe('Testing challenge 3', () => {
  let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

  test('It should return the cities whose names begin with the letters A through J', () => {
    expect(citiesAtoJ(cities)).toContain('Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken');
    expect(citiesAtoJ(cities).length).toStrictEqual(5);

    expect(citiesAtoJ([])).toStrictEqual([]);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toEqual(expect.arrayContaining(['Albuquerque', 'Chicago', 'Eugene']));
  });

  test('It should not return the cities whose names begin with the letters K through Z', () => {
    expect(citiesAtoJ(cities)).not.toContain('San Diego', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Newport Beach');
  });
});

describe('Testing challenge 4', () => {
  test('It should match any of the acceptable inputs', () => {
    expect(matchMonth('Oct')).toBeTruthy();
    expect(matchMonth('oct')).toBeTruthy();
    expect(matchMonth('October')).toBeTruthy();
    expect(matchMonth('october')).toBeTruthy();
  });

  test('It should not match anything other than the acceptable inputs', () => {
    expect(matchMonth('November')).toBeFalsy();
    expect(matchMonth('nov')).toBeFalsy();
    expect(matchMonth(123)).toBeFalsy();
    expect(matchMonth('octob')).toBeFalsy();
    expect(matchMonth('OCTOBER')).toBeFalsy();
    expect(matchMonth('notOctober')).toBeFalsy();
  });
});

describe('Testing challenge 5', () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.';

  test('It should only return words that are immediately followed by a space', () => {
    expect(noPunctuation(lorem)).toStrictEqual([ 'Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ' ]);
    expect(noPunctuation(lorem).length).toStrictEqual(23);
    expect(noPunctuation('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toEqual(expect.arrayContaining(['Given ', 'by ', 'our ', 'hand ', 'in ', 'the ', 'meadow ', 'that ', 'is ', 'called ', 'between ', 'Windsor ', 'and ', 'on ', 'the ', 'fifteenth ', 'day ', 'of ', 'June ', 'in ', 'the ', 'seventeenth ', 'year ', 'of ', 'our ', 'reign ', 'the ', 'new ', 'regnal ', 'year ', 'began ', 'on ', '28 ']));
  });

  test('It should not contain words that are followed by any non-space character', () => {
    expect(noPunctuation(lorem)).not.toContain(['amet,', 'elit.', 'egestas.', 'elit,', 'sed.', 'sem,', 'diam.', 'nibh.', 'porttitor.', 'euismod,', 'ultrices.', 'massa,', 'vel,', 'purus.', 'purus,', 'odio.', 'aliquet,', 'non,', 'sem.']);
  });
});

describe('Testing challenge 6', () => {
  let startString = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!';

  test('It should remove the vowels from the hangman string and replace them with underscores', () => {
    expect(hangman(startString)).toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
    expect(hangman('I wAnt them all tO bE removed and replaced with Underscores.')).toStrictEqual('_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.');
  });

  test('It should not contain the letters "a", "e", "i", "o", or "u"', () => {
    expect(hangman(startString)).not.toContain('a', 'e', 'i', 'o', 'u');
  });
});

describe('Testing challenge 7', () => {
  test('It should return an array of instances of "sells", shells", and "seashells"', () => {
    expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
    expect(findShells(seashells).length).toStrictEqual(9);
  });
});