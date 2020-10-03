

//A 
let people = ["Hassan", "Jan", "Peter", "Boline", "Frederik", "Bjarne", "Casper"]
function filterThis(array) {
    if (array.includes("a")) {
        return array
    }
}

function myFilter(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {      
        if(callback(element)) {
            const newItem = element 
            arrayCopy.push(newItem)
        }
    });
    return arrayCopy;
}

let listitems2 = myFilter(filterThis, people);
console.log(listitems2)

//B
function makeListItem(str) {
    var splitString = str.split(""); 

    var reverseArray = splitString.reverse(); 
   
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

function myMap(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

let listitems = myMap(makeListItem, people);
console.log(listitems)