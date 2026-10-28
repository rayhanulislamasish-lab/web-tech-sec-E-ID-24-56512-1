let name = prompt("Enter student's name:");
let age = parseInt(prompt("Enter student's age:"));
let cgpa = parseFloat(prompt("Enter student's CGPA:"));
let isStudent = (prompt("Are you a student? (true/false)") === "true");
let grade = prompt("Enter student's grade (A/B/C):").charAt(0);

console.log("----- Student Information -----");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("CGPA: " + cgpa);
console.log("Student: " + isStudent);
console.log("Grade: " + grade);

let courses = [
    "Web Technology",
    "OOP",
    "Database"
];

console.log("----- Courses -----");

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

let marks = parseInt(prompt("Enter student's marks:"));

if (marks >= 80) {
    console.log("Marks: " + marks);
    console.log("Grade: A+");
}
else if (marks >= 70) {
    console.log("Marks: " + marks);
    console.log("Grade: A");
}
else if (marks >= 60) {
    console.log("Marks: " + marks);
    console.log("Grade: B");
}
else {
    console.log("Marks: " + marks);
    console.log("Grade: F");
}

function showStudent(name, age) {
    console.log("----- Student Details -----");
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
}

showStudent(name, age);

let students = [];

for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student " + (i + 1) + " name:");
}

console.log("----- Student Names -----");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}