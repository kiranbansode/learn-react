/* ------------------- Primitives: number, string, boolean ------------------ */

let age: number;
age = 12;

let username: string | string[];
username = 'kiran';

let isInstructor: boolean;
isInstructor = true;

/* ------------------- More complex types: arrays, objects ------------------ */
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
	name: string;
	age: number;
};

let person: Person;
person = {
	name: 'kiran',
	age: 32,
};

// person = {
// 	isEmployee: false
// };

let people: Person[];

/* ----------------------------- Type Inference ----------------------------- */
let course: string | number = 'React - The Complete Guide'; // Union Type
course = 12345;

/* ----------------------- Functions & types ---------------------- */

function add(a: number, b: number) {
	return a + b;
}

function printOut(value: any) {
	console.log(value);
}
