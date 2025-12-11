const object = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(object);
console.log(object.name);

const jsonStr = JSON.stringify(object);
console.log("Object: ", object);
console.log("json String: ", jsonStr);

interface Student {
  name: string;
  surname: string;
  age: number;
  averageGrade: number;
}

let student: Student = {
  name: "Pattama",
  surname: "Longani",
  age: 14,
  averageGrade: 1.0,
};

const checkRetirement = (student: Student): string => {
  if (student.averageGrade < 2) {
    return `${student.name} ${student.surname} are retired`;
  } else {
    return JSON.stringify(student);
  }
};

console.log(`check returement ${checkRetirement(student)}`);
