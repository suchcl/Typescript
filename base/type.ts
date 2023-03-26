interface IPerson {
    name: string;
    age?: number;
    readonly code: string;
}

type Point = {
    x: number;
    y: number;
};

type nNumber = number;
const n: nNumber = 12;
const nm: number = 13;

interface IStudent extends IPerson {
    class: string;
    student_id: number;
}

const student: IStudent = {
    name: "Dave Herman",
    age: 12,
    class: '2',
    student_id: 21,
    code: '0940'
};

type NewPerson = {
    name: string;
    code: number;
} & {
    mobile: number;
};
const np:NewPerson = {
    name: "Nicholas Zakas",
    code: 1930,
    mobile: 399405
};