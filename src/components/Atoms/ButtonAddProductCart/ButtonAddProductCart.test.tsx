import { render, fireEvent } from "@testing-library/react";
import ButtonAddProductCart from "./ButtonAddProductCart";

describe("ButtonAddProductCart Component", () => {
    test("отображает кнопку 'Add to cart'", () => {
        const addNewProductToCart = jest.fn();
        const { getByRole } = render(
            <ButtonAddProductCart addNewProductToCart={addNewProductToCart} />
        );

        const button = getByRole("button", { name: "Add to cart" });
        expect(button).toBeInTheDocument();
    });

    test("вызывает функцию addNewProductToCart при клике на кнопку", () => {
        const addNewProductToCart = jest.fn();
        const { getByRole } = render(
            <ButtonAddProductCart addNewProductToCart={addNewProductToCart} />
        );

        const button = getByRole("button", { name: "Add to cart" });
        fireEvent.click(button);

        expect(addNewProductToCart).toHaveBeenCalled();
    });
});
