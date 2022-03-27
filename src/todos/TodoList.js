import React, {useEffect} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";
import {loadTodos, markTodoAsCompletedRequest, removeTodoRequest} from "./thunks";
import { getCompletedTodos, getIncompleteTodos, getTodos, getTodosLoading } from "./selectors.js";

const ListWrapper = styled.div`
	max-width: 700px;
  margin: auto;
`;

const TodoList = ({
	todos = [],
	completedTodos,
	incompletedTodos,
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
		<ListWrapper>
			<NewTodoForm />
			<h3>Incomplete todos</h3>
			{incompletedTodos.map(todo => <TodoListItem
				key={todo.id}
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}
			/>)}
			<h3>Completed todos</h3>
			{completedTodos.map(todo => <TodoListItem
				key={todo.id}
				todo={todo}
				onRemovePressed={onRemovePressed}
				onCompletedPressed={onCompletedPressed}
			/>)}
		</ListWrapper>
	)

	return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
	completedTodos: getCompletedTodos(state),
	incompletedTodos: getIncompleteTodos(state),
	isLoading: getTodosLoading(state),
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