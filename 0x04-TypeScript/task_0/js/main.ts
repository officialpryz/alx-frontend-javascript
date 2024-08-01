// write an interface

interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// let create two students

const student1: student = {
    firstName: "praise",
    lastName: "Afolabi",
    age: 23,
    location: "Lagos",
}

const student2: student = {
    firstName: "sammber",
    lastName: "aloyilepon",
    age: 50,
    location: "abudu"
}

//create an array named studentsList containing two variables

const studentsList: student[] = [student1, student2];

//render table with vanilla jajvascript

const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.background = "pink";
table.appendChild(tbody);

//append a new row to the table
studentsList.forEach((student: student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);
