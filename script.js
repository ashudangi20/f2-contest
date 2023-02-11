/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];


function PrintStudentswithMap() {
  const qualifiedStudents = students.map(student => {
    if (student.marks > 50) {
      return student;
    }
  });

  console.log(qualifiedStudents);
};
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  students.forEach(function(student) {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}
PrintStudentsbyForEach();


function addData() {
  //Write your code here, just console.log
    let newStudent = {id:4,name:"susan",age:"20",marks:45};
    students.push(newStudent);
    console.log(students);
  }
  
  addData();

function removeFailedStudent() {
  //Write your code here, just console.log
  students = students.filter(function(student) {
    return student.marks >= 50;
  });
  console.log(students);
}
removeFailedStudent();


function concatenateArray() {
  //Write your code here, just console.log
  let students2 = [{id:4,name:"peter",age:"18",marks:75}, {id:5, name:"jess",age:"20", marks:90}, {id:6, name:"kim", age:"19",marks:65}];

    let combinedArray = students.concat(students2);
    console.log(combinedArray);
  }

  concatenateArray();
