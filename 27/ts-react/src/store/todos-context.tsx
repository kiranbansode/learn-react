import { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
	props
) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodos((prevState) => prevState.concat(newTodo));
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
	};

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
