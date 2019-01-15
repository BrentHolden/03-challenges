let x = 'string';
let y = 'racecar';

let check = (checking) => {
    //var checking = y;
    let broken = checking.split("");
    for (item of broken) {
        console.log(item);
    }
}

check(y);
check(x);