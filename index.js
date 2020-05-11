


// console.log('hello')
//  
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