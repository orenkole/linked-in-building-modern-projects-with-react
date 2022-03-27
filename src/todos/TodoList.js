import React, {useEffect} from "react";
import {connect} from "react-redux";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";
import "./TodoList.css";
import { removeTodo } from "./actions.js";
import { markTodoAsCompleted } from "./actions.js";
import {loadTodos, markTodoAsCompletedRequest, removeTodoRequest} from "./thunks";

const TodoList = ({
	todos = [],
	onRemovePressed,
	onCompletedPressed,
	isLoading,
	startLoadingTodos
}) => {
	useEffect(() => {
		startLoadingTodos
	}, [])
	const loadingMessage = <div>Loading todos...</div>
	const content = (
		<div className="list-wrapper">
			<NewTodoForm />
			{todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
		</div>
	)

	return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
	todos: state.todos,
	isLoading: state.isLoading,
})

const mapDispatchToProps = dispatch => ({
	onRemovePressed: id => dispatch(removeTodoRequest(id)),
	onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
	startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);