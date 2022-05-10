class Todo {
	id: string;
	text: String;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}

export default Todo;
