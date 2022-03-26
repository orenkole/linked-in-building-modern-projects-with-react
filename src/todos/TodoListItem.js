import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({todo, onRemovePressed, onCompletedPressed}) => {
	return (
		<div className="todo-item-container">
			<h3>{todo.text}</h3>
			<div className="buttons-container">
				{!todo.isCompleted && (
					<button className="completed-button"
					onClick={() => onCompletedPressed(todo.text)}
				>Mark as completed</button>
				)}
				<button className="remove-button"
					onClick={() => onRemovePressed(todo.text)}
				>remove</button>
			</div>
		</div>
	)
}

export default TodoListItem;