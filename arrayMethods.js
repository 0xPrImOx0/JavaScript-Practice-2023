
const rey = {name: "Rey", grade:70};
const samm = {name: "Samm", grade:80};
const marte = {name: "Marte", grade:35};
const czar = {name: "Czar", grade:85};
const amil = {name: "Amil", grade:20};
const ruthsen = {name: "Ruthsen", grade:58};
const tirso = {name: "Tirso", grade:40};
const mich = {name: "Mich", grade: 50};
const jade = {name: "Jade", grade:18};
const azure = {name: "Azure", grade: 64};



const students = [rey, samm, marte, czar, amil, ruthsen, tirso, mich, jade, azure];

const totalGrade = students.reduce((accumulator, student) => { return accumulator + parseInt(student.grade)}, 0);
const averageGrade = totalGrade / students.length;

const studentPassed = students.filter((element) => {
    return (element.grade) >= 50;
});

const ascendingGrade = students.sort((a, b) => {return a.grade - b.grade});
console.log(ascendingGrade);
const descendingGrade = ascendingGrade.reverse();

const allPassed = students.every((student) => {return student.grade >= 50});

const highestGrade = students.reduce((accumulator, student) => {return Math.max(accumulator, student.grade)}, 0);

function setOfStudents (...student){ //rest operator
    return student;
}

const passedStudents = setOfStudents(rey, samm, marte, czar, amil, ruthsen, tirso, mich, jade, azure).filter((element) => {return element.grade >= 50;});
const failedStudents = setOfStudents(rey, samm, marte, czar, amil, ruthsen, tirso, mich, jade, azure).filter((element) => {return element.grade < 50;});

const allStudents = [...passedStudents, ...failedStudents]; //spread operator
// console.log(allStudents);

function addStudent (name, grade, callback) {
    students.push({name: name, grade:grade});
    callback(students);
}


function logStudents (studentsList)  {
    return console.log("Updated student list with callback:", studentsList);
};

addStudent("Luna", 73, logStudents);