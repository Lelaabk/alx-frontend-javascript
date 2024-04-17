// Define interface for the DirectorInterface
interface  DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define interface for the TeacherInterface
interface  TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Taking a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Implement the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return  new Director();
  }
}

// Define type predicate for isDirector
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

//Define type of Subjects string literal
type Subjects = 'Math' | 'History';

//Define function of teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(createEmployee(200)); //output -> Teacher
console.log(createEmployee(1000)); //output -> Director
console.log(createEmployee('$500')); //output -> Director
console.log(executeWork(createEmployee(200))); // output -> Getting to work
console.log(executeWork(createEmployee(1000))); //output -> Getting to director tasks
console.log(teachClass('Math')); // output -> Teaching Math
console.log(teachClass('History')); // output -> Teaching History