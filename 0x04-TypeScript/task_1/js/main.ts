// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allow any additional properties
}

// Create instances of the Teacher
const teacher3: Teacher = {
  contract: false,
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
};

// Define the Directors interface extending the Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create instance of the Directors
const  director1: Directors = {
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  location: "London",
  numberOfReports: 17,
};

// Define interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Define interface for StudentClass constructor
interface  StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

// Define interface for StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentClass {
  constructor(public firstName:  string, public lastName: string) {}
  workOnHomework() :string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

// Create instance of StudentClass
const student = new StudentClass("John", "Doe");

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // output -> J. Doe
console.log(student.displayName()); // output -> John
console.log(student.workOnHomework()); // output -> Currently working
