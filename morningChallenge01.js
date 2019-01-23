// Create a function that takes in an object

// In the function, check if the object contains a specific key/value pair and return a boolean answer


let coffee = {
    Temperature: 'Scalding',
    Cup: 'Paper',
    Sugar: false,
    Cream: false,
}

let checkCoffee = (x, y) => {

    switch (true) {
        case (coffee[x] === y):
            console.log("The coffee order is correct!")
    }
    };

checkCoffee('Cream', true);