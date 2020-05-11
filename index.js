


// console.log('hello')
//  
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



addBorder(['abc', 'cds'])