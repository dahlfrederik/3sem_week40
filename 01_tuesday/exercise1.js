

let people = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

let peopleOnlyA = people.filter(people => people.includes("a"))
console.log(peopleOnlyA)

let peopleReverse = people.map(people => people.split("").reverse().join(""))
console.log(peopleReverse)
