// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create instances of the Student
const student1: Student = {
  firstName: "Layla",
  lastName: "Abkari",
  age: 25,
  location: "Tangier"
};

const student2: Student = {
  firstName: "Ayoub",
  lastName: "Zakarya",
  age: 26,
  location: "Agadir"
  };

// Create array contains students
const studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table
const tb = document.createElement("table");

studentsList.forEach(student => {
  const ligne = tb.insertRow();
  const firstNameCell = ligne.insertCell(0);
  const locationCell = ligne.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append Table to body of document
document.body.appendChild(tb);
