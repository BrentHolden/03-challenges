let myCar = {
    make: 'Nissan', 
    model: 'Versa',
    tires: 4, 
    color: 'White',
    seats: 5,
};

let myCar2 = {};

Object.keys(myCar).forEach(i => {
    myCar2[myCar[i]] = i;
    })
console.log(myCar2);