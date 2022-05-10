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

let person: { name: string; age: number };
person = {
	name: 'kiran',
	age: 32,
};

// person = {
// 	isEmployee: false
// };

let people: { name: string; age: number }[];

/* ----------------------------- Type Inference ----------------------------- */
let course: string | number = 'React - The Complete Guide'; // Union Type
course = 12345;

// Functions types, parameters
