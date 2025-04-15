class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toDisplay(){
        console.log(`I am ${this.name}`)
    }
};


const rey = new Person("rey", 10);

rey.name = "daug";

rey.toDisplay();


const colors = ["red", "green", "blue", "black", "white"];

console.log(colors);

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

