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

   for ( i = 1; i < picture.length -1; i ++ ) {

        picture[i] = '*'.concat(picture[i],'*')
        
  }

    console.log(picture)
        
}

// The difference between repeat and concat is, repeat is used to form something new over the number of times it is called. while concat is used to join things together

addBorder(['abc', 'cds'])

// End of Border Algorithms


// Median Algorithms

let median = (num) => {
    const isEven = num.length % 2 === 0;

    return isEven ? num[num.length/2 - 1] : num[Math.floor( num.length / 2 )]
}

console.log(median([2,4,6,7]))
console.log(median([2,4,6,8,9,1]))

// end of median algorithms


// Adding Two Digits

function add(num) {
    let a = num.toString()
    console.log(a)

}

add('29')
