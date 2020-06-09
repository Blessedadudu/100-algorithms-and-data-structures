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
    for (var key in map) 
        result.push(key)
        console.log(result)
    return result;

}
arrr()



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


// Alphabetic shift algorithm 




// Loop for babes

let arr = (babes) => {
    let array = [];
    for(i= 0; i < babes.length; i++) {
        if (babes[i].peng && babes[i].havesense) {
            array.push(babes[i])
        }
        
    }
    return array
}

let babes = [
    {
        babe: 'Ada',
        peng: true,
        havesense: true,
    },
    {
        babe: 'Mary',
        peng: false,
        havesense: true,
    },
    {
        babe: 'Motun',
        peng: true,
        havesense: true,
    }

]
   
    
    

console.log(arr(babes)) 

