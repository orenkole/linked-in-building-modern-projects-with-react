import React, { useState } from "react";
import {connect} from "react-redux";
import "./NewTodoForm.css";
import { addTodoRequest } from "./thunks";

const NewTodoForm = ({todos, onCreatePressed}) => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className="new-todo-form">
			<input className="new-todo-input" type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className="new-todo-button"
				onClick={() => {
					const isDuplicateText = todos.some(todo => todo.text === inputValue);
					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue('');
					}
				}}
			>Create todo</button>
		</div>
	)
}

const mapStateToProps = state => ({
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
	onCreatePressed: text => dispatch(addTodoRequest(text))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewTodoForm);