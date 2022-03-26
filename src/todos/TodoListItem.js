import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({todo}) => {
	return (
		<div className="todo-item-container">
			<h3>{todo.text}</h3>
			<div className="buttons-container">
				<button className="completed-button">Mark as completed</button>
				<button className="remove-button">remove</button>
			</div>
		</div>
	)
}

export default TodoListItem;