
'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

const count =( (target, input) => {
    // Solution code here...
    // let  u= input.filter(input.map((val,ind)=>{
  // console.log('xxxxxxxxxxxxxxxxxxxxxxxxx',val[ind],'val',val);
  // let t=input.filter((val2,ind2)=>{
    // console.log('ind',ind2,'y',val2[ind2],'val2',val2)
    // let o= input.forEach((val,ind)=>{
    // // console.log('xxxxxxxxxxxxxxxxxxxxxxxxx',val[ind],'val',val);
    // console.log(ind+1);
    // return ind+1;
    // })
    //  console.log(ind2+1);

    let o= input.forEach((val,ind)=>{
      if (typeof input != "undefined" ){
        val[ind]=0;
        //  console.log('x',val[ind]);
      
       console.log('iiiii',ind+1);
      }
      console.log('iiiii',ind+1);
    return ind;
    })
  
  // return val[ind];
  
  //   }))
    // return x;
  });

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...
  console.log(input);
    let sum = 0;
    let sum1 = 0;
  let rows= new Array(input.length+3).fill(0);
  let cols= new Array(input.length+3).fill(0);
  console.log('row1',rows);
   console.log('col1',cols);
  for (let i=0;i<input.length;i++){
  console.log('row11',rows);
   console.log('col11',cols);
    for(let j=0;j<input[i].length;j++){
      let vals=input[i][j];
      let sum1=input[i][j];
      rows[i]+=vals;
      cols[j]+=vals;
        sum+=input[i][j];
       sum1+= rows[i];

        // sum+=cols[j];4
                    console.log('summ111',sum1);

        console.log('rows[i]',rows[i]);
            console.log('summmmmmm',sum);
      console.log('vals',vals);
        console.log('row10',rows);
   console.log('col10',cols);
    }
    // console.log('valsssssssss',vals);
      console.log('row01',rows);
   console.log('col01',cols);
  }
  console.log('row2',rows);
   console.log('col2',cols);
 
 
  return sum;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
  let v =[];
   let v2 =[];
  let rows= new Array(input.length+1).fill(0);
  let cols= new Array(input.length+1).fill(0);
  for (let i=0;i<input.length;i++){
  
    for(let j=0;j<input[i].length;j++){
      let vals=input[i][j];
      if (vals%5==0){
console.log(vals);

   rows[i][j]=vals;
      cols[j]=vals;
      input[i][j]
      v.push(vals)
          console.log(v);
      console.log(vals);
         console.log('row10',rows);
   console.log('col10',cols);
   let e = Math.pow(2,vals)
      console.log('e',e);
       v2.push(e)
          console.log(v2);
      }
    }
  }
  console.log('row11',rows);
   console.log('col11',cols);
   return e;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */


let o=[];
let p=[];
let tt=[]
  let index;
  let i=[];
let findShortest = (data) => {
  // Solution code here...
  let t = starWarsData.forEach((value,index)=>{
//     let i = new Array(0).fill(index)
    let m =starWarsData[index].name;
//  let u=p.push(i)
//   let l=o.push(m)
//  let y=i.push (m.length)
  //   console.log(i)
  // console.log(m)
  //   console.log(o)
    // if (m.search(/\b[a-zA-Z]{1}\b/g)){
     if( m.split(/\s/g).length === 1){
      tt.push(m)
    //   console.log('kkk',m)
    // console.log('kkllk',o)
    }
  // let k = starWarsData.filter((value1,index1)=>{
    
     
  //   // let y=i.push (starWarsData[index1].name.length)
  //   // console.log(i)
  //   //  tt.push(i)
  //   // console.log('p',tt)
  // })
  // //  tt.push(i)
  // //   console.log('o',tt)
  // })
  //   tt.push(i)
    console.log(tt)

})
return tt;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});