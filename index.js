// Add Border Algorithms

let addBorder = (picture) => {
    const lengthofwall = picture[0].length + 2;
    let wall = ''; 

    for ( i = 0; i < lengthofwall; i ++ ) {
        wall = wall.concat('*')
    }
//     console.log('a', wall);
    picture.unshift(wall);
    picture.push(wall);
    
    console.log('b', wall, picture);

   for ( let i = 1; i < picture.length -1; i ++ ) {

        picture[i] = '*'.concat(picture[i],'*')
        
  }

    console.log(picture)
        
}

// The difference between repeat and concat is, repeat is used to form something new over the number of times it is called. while concat is used to join things together

addBorder(['abc', 'cds'])

// End of Border Algorithms


// Median Algorithms

const median = (num) => {
    const isEven = num.length % 2 === 0;

    return (isEven ? num[num.length/2 - 1] : num[Math.floor( num.length / 2 )])
}

console.log(median([2,4,6,7]))
console.log(median([2,4,6,8,9,1]))

// end of median algorithms


// Adding Two Digits
function add(num) {
    let a = num.toString().split('')
    console.log(a)

    return parseInt(a[0]) + parseInt(a[1])

}

console.log(add('29'))
console.log(add('49'))
console.log(add('69'))

// End of adding algorithms

// AdjacentElementsProduct

function adjacentElementsProduct (array) {
    let largestProduct = array[0] * array[1]
    console.log(largestProduct)
    for (let i = 1; i < array.length -1; i++) {
        let product = array[i] * array[i+1]
        console.log(product)
        largestProduct = largestProduct < product ? product : largestProduct;

        console.log(largestProduct)
       
    }
    return largestProduct 
}

console.log(adjacentElementsProduct ([2, -4, 6, 7, 5, 6, 6]))


// longest String

const allLongestStrings = (inputArr) => {
    longestLength = 0;

    const longestWord = [];

    inputArr.forEach(word => {
        longestLength = longestLength < word.length ? word.length : longestLength 

        console.log(longestLength)
    })

    inputArr.forEach(word => {
       word.length === longestLength && longestWord.push(word)
    })

    return longestWord

}

console.log(allLongestStrings(['ads', 'errt', 'wdww', 'ee', 'tqqq']))


// End of Longest string

// almostIncreasingSequence 

function almostIncreasingSequence (sequence) {
    let count = 0;

    for( let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[ i - 1]) {
            count ++;

            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
   
    return count <=1
}

console.log(almostIncreasingSequence ([ 1,3,2,4]))
console.log(almostIncreasingSequence ([ 1,1,4,2]))
console.log(almostIncreasingSequence ([ 1,3,4,2]))
console.log(almostIncreasingSequence ([ 3,4,2,4]))


// Finding duplicate in array 
function arrr() {
    let arr = ['sam', 'tope', 'seyi', 'sam', 'tope'];
    let map = {};
    let result = []
    for (var i = 0; i < arr.length; i++) {
        let el = arr[i];
        (map[el]) ? map[el]++ : (map[el] = 1);
        console.log(map[el])
    }
    for (var key in map) {
        result.push(key)
    }
    console.log(result)
    return result;

}
console.log(arrr([1,2,1,3,4]))



function duplicateArr (array) {
    let uniqueArr = [];
    let found = false;
    console.log(array.length)

    for( i = 0; i < array.length; i++) {
        for( let y = 0; y < uniqueArr.length; y++) {
            if (array[i] === uniqueArr[y]) {
                found = true
            }
        }
        if(found == false) {
            uniqueArr.push(array[i])
        }
        found = false;
        
    }
    console.log(uniqueArr) 
}

duplicateArr ([1,2,3,3,4,5,2,3,5])
duplicateArr ([ 3,4,2,3,1,4,1])
duplicateArr (['sam', 'john', 'sam', 'philip', 'john', 'philip']);



// Findin re-occurrence in an array 
function array(arr) {
    let int = 1;
    let count = 0
   for(let i = 0; i < arr.length; i++ ){
      if (arr[i] === int) {
           count ++;
      }
  }


 return count;  
}

console.log(array([1,2,3,4,5,1,1,6,1]))


// Loop for babes

let arr = (babes) => {
    let array = [];
    for(i= 0; i < babes.length; i++) {
        (babes[i].peng &&  babes[i].smart) && array.push(babes[i]);
        
    }
    console.log(array.length)
    let a = `Blessed! ${array.length === 0 ? 'Keep searching !' : 'Nice, you found some babes'}`
    return a
}


let babes = [
    {
        babe: 'Ada',
        peng: true,
        smart: true,
    },
    {
        babe: 'Mary',
        peng: false,
        smart: true,
    },
    {
        babe: 'Motun',
        peng: true,
        smart: true,
    }

]

console.log(arr(babes)) 


// Alphabetic shift algorithm 
let alphabeticshift = (inputString) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('');
    console.log(alphabet)
    inputShifted = inputString.split('')
    
    for(let i = 0; i < inputShifted.length; i++ ){
        if(inputShifted[i] !== 'z') {
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }

        inputShifted[i] = alphabet[index];        
    }

    return inputShifted.join('')
}

console.log(alphabeticshift('correct'))


let alphabeticSubSequence = (s) => {
    const chars = s.split('');
    const charValues = [];

    chars.forEach(char => {
        charValues.push(char.charCodeAt(0))
    })

    if (new Set(charValues).size !== chars.length ) {
        return false;
    }

    for(let i = 0; i < charValues.length - 1; i++ ){
        if(charValues[i] >= charValues[i + 1]) {
            return false
        }       
    }

    return true
}

console.log(alphabeticSubSequence('zab'))
console.log(alphabeticSubSequence('del'))
console.log(alphabeticSubSequence('effg'))
console.log(alphabeticSubSequence('abcdj'))

function solution(A) {

    let sorted = A.sort();
    let max = sorted[sorted.length-1];
    let r = 1;

    for(let i=1; i <= (max + 1); i++) {
        r  = A.includes(i) ? 1 : i ;
        if(r>1) break;
    }

    return r;
}

console.log(solution([1,3,2,6,5]))
console.log(solution([-1,-3]))
console.log(solution([1,3,2,6,5]))


function alternatingSum(array) {
    let evenSum = 0;
    let oddSum = 0;

    array.forEach((element, index) =>{
        if(index % 2 === 0) {
            evenSum += element
        } else {
            oddSum += element
        }
    })


    return [evenSum, oddSum]
}

console.log(alternatingSum([40,30,10,50,60]))
console.log(alternatingSum([40,10,50,90]))
console.log(alternatingSum([20,60, 5, 100]))

// Are Equally strong

const equallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;

    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest
}

console.log(equallyStrong(10,15,10,15))
console.log(equallyStrong(20,30,10,15))
console.log(equallyStrong(5,12,5,12))


// let newArray = () => {
    
// }

// newArray([1,2,2,3,4,1,5,1,2,3])

function areSimilar(a,b) {
    let A = a.sort().toString()
    let B = b.sort().toString()
    
    if (A === B) {
        return true;
    }

    return false
}

console.log(areSimilar([1,2,3], [1,2,3]))
console.log(areSimilar([1,2,3], [2,2,3]))
console.log(areSimilar([2,1,3,4], [1,4,2,3]))
console.log(areSimilar([1,2,3,5,4], [1,2,3]))



let arrayChange = (inputArr) => {
    let count = 0;
    for(let i = 0; i < inputArr.length; i++ ){
        if(inputArr[i] >= inputArr[i + 1]){
            const difference = (inputArr[i] + 1) - inputArr[i+1];
            inputArr[i+1] = inputArr[i] + 1;
            count += difference
        }      
    }

    return count
}

console.log(arrayChange([1,1,1]))
console.log(arrayChange([4,3,2]))
