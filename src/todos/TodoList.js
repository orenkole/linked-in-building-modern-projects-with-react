import React from "react";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";

const TodoList = ({todos = []}) => {
	return (
		<div className="list-wrapper">
			<NewTodoForm />
			{todos.map(todo => <TodoListItem todo={todo} />)}
		</div>
	)
}

export default TodoList;