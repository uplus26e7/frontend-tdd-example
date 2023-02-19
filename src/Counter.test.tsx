import { fireEvent, render } from "@testing-library/react";
import { Counter } from "./Counter";
import "@testing-library/jest-dom";

describe("Counter", () => {
	it("初期状態は0である", () => {
		const { getByTestId } = render(<Counter />);
		expect(getByTestId("result")).toHaveTextContent("0");
	});
	it("「+」ボタンを押すと１つカウントアップする", () => {
		const { getByTestId, getByText } = render(<Counter />);
		fireEvent.click(getByText("+"));
		expect(getByTestId("result")).toHaveTextContent("1");
	});
	it("「-」ボタンを押すと1つカウントダウンする", () => {
		const { getByTestId, getByText } = render(<Counter />);
		fireEvent.click(getByText("-"));
		expect(getByTestId("result")).toHaveTextContent("-1");
	});
});
