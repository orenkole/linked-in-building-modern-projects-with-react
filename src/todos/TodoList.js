import React from "react";
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";
import { removeTodo } from "./actions.js";
import { markTodoAsCompleted } from "./actions.js";

const TodoList = ({todos = [], onRemovePressed, onCompletedPressed}) => {
	return (
		<div className="list-wrapper">
			<NewTodoForm />
			{todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
		</div>
	)
}

const mapStateToProps = state => ({
	todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
	onRemovePressed: text => dispatch(removeTodo(text)),
	onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);