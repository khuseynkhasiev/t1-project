import { render, fireEvent } from "@testing-library/react";
import DeleteProductCart from "./DeleteProductCart";

describe("DeleteProductCart Component", () => {
    test("отображает кнопку 'Delete'", () => {
        const deleteFullProductCart = jest.fn();
        const { getByRole } = render(
            <DeleteProductCart
                deleteFullProductCart={deleteFullProductCart}
                id={1}
            />
        );

        const button = getByRole("button", { name: "Delete" });
        expect(button).toBeInTheDocument();
    });

    test("вызывает функцию deleteFullProductCart с правильным аргументом при клике на кнопку", () => {
        const deleteFullProductCart = jest.fn();
        const { getByRole } = render(
            <DeleteProductCart
                deleteFullProductCart={deleteFullProductCart}
                id={1}
            />
        );

        const button = getByRole("button", { name: "Delete" });
        fireEvent.click(button);

        expect(deleteFullProductCart).toHaveBeenCalledWith(1);
    });
});
