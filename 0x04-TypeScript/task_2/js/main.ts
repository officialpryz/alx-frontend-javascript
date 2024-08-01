interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "working from home"
    }

    getCoffeeBreak(): string {
        return "getting a coffee break"
    }

    workDirectorTasks(): string {
        return "getting to director tasks"
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot work from home"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

//functions specific to employees

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

//string literal types

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return `Teaching Math`;
} else if (todayClass === "History") {
    return `Teaching History`;
}
}

console.log(teachClass("Math"));
console.log(teachClass("History"));