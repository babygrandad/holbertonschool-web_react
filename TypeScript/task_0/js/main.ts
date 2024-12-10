interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

var studentList: Array<object> = [];

const student1: Student = {
  firstName: "Peter",
  lastName:  "Molenew",
  age: 12,
  location: "Alabama",
};

const student2: Student = {
  firstName: "Jane",
  lastName:  "Molenew",
  age: 10,
  location: "Alabama",
};

studentList.push(student1,student2)

console.log(studentList)