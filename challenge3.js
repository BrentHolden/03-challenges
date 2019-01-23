let myCar = {
    make: 'Nissan', 
    model: 'Versa',
    tires: 4, 
    color: 'White',
    seats: 5,
};

let myCar2 = {};

// Object.keys(myCar).forEach(i => {

//     myCar2[myCar[i]] = i;

// })


for (j in myCar) {

    myCar2[myCar[j]] = j;

}

console.log(myCar2);