import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ButtonAction from "./ButtonAction";

describe("ButtonAction", () => {
    test('отображает кнопку как ссылку при передаче prop "tag" со значением "link"', () => {
        const link = "/some-route";
        const buttonText = "Перейти";
        render(
            <Router>
                <ButtonAction tag="link" link={link} text={buttonText} />
            </Router>
        );
        const linkElement = screen.getByRole("link", {
            name: buttonText,
        }) as HTMLAnchorElement;
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute("href")).toBe(link);
    });

    test("вызывает функцию handleClickButton при клике на кнопку", () => {
        const handleClick = jest.fn();
        const buttonText = "Нажать";
        render(
            <ButtonAction
                tag="button"
                text={buttonText}
                handleClickButton={handleClick}
            />
        );
        const buttonElement = screen.getByRole("button", {
            name: buttonText,
        }) as HTMLButtonElement;
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('отображает пустое значение, если не передан link для tag="link"', () => {
        const buttonText = "Текст кнопки";
        render(<ButtonAction tag="link" text={buttonText} />);
        const linkElement = screen.queryByRole("link", { name: buttonText });
        expect(linkElement).not.toBeInTheDocument();
    });

    test('отображает пустое значение, если tag не равен "link" или "button"', () => {
        const buttonText = "Текст кнопки";
        // @ts-ignore
        render(<ButtonAction tag="invalid" text={buttonText} />);
        const buttonElement = screen.queryByRole("button", {
            name: buttonText,
        });
        expect(buttonElement).not.toBeInTheDocument();
    });
});
