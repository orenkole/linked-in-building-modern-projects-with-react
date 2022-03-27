import {expect} from "chai";
import {getCompletedTodos} from "../selectors";

describe("The getCompletedTodo selector", () => {
	it("Returns only completed todos", () => {
		const fakeTodos = [
			{text: "say hello", isCompleted: true},
			{text: "say goodbye", isCompleted: false},
			{text: "climb Everest", isCompleted: false},
		]

		const expected = [
			{text: "say hello", isCompleted: true},
		]

		const actual = getCompletedTodos.resultFunc(fakeTodos);

		expect(actual).to.deep.equal(expected);
	})
})