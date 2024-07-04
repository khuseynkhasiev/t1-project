import { render } from "@testing-library/react";
import LineWidth from "./LineWidth";

describe("LineWidth Component", () => {
    test("отображает компонент с правильным цветом", () => {
        const color = "red";
        const { container } = render(<LineWidth color={color} />);

        const lineWidthElement = container.firstChild as HTMLElement;
        expect(lineWidthElement).toHaveStyle(`background-color: ${color}`);
    });
});
