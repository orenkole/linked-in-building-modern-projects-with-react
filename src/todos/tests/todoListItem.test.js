import {expect} from "chai";
import {getBorderStyleFromDate} from "../TodoListItem";

describe("getBorderStyleFromDate", () => {
	it("returns 'none' when the date is less than 5 days ago", () => {
		const today = Date.now();
		const recentDate = new Date(Date.now() - 8640000 * 3)
		const expected = 'none';
		const actual = getBorderStyleFromDate(recentDate, today);
		expect(actual).to.equal(expected);
	});
	it("returns border when the date is more than 5 days ago", () => {

	});
})