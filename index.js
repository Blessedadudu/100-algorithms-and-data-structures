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

    console.log('b', wall, picture[4]);

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