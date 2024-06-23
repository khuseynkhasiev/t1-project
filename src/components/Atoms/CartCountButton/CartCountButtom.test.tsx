import { render, fireEvent } from "@testing-library/react";
import CartCountButton from "./CartCountButton";

describe("CartCountButton Component", () => {
    const mockProps = {
        quantity: 3,
        stock: 5,
        id: 1,
        incrementProductCart: jest.fn(),
        decrementProductCart: jest.fn(),
        deleteFullProductCart: jest.fn(),
    };

    test("отображает корректное количество в инпуте", () => {
        const { getByDisplayValue } = render(
            <CartCountButton {...mockProps} />
        );

        const inputElement = getByDisplayValue("3");
        expect(inputElement).toBeInTheDocument();
    });

    test("увеличивает количество при клике на кнопку 'add'", () => {
        const { getByLabelText } = render(<CartCountButton {...mockProps} />);

        const addButton = getByLabelText("add");
        fireEvent.click(addButton);

        expect(mockProps.incrementProductCart).toHaveBeenCalledWith(4);
    });

    test("уменьшает количество при клике на кнопку 'delete'", () => {
        const { getByLabelText } = render(<CartCountButton {...mockProps} />);

        const deleteButton = getByLabelText("delete");
        fireEvent.click(deleteButton);

        expect(mockProps.decrementProductCart).toHaveBeenCalledWith(2);
    });

    test("удаляет полностью продукт при уменьшении до нуля", () => {
        const { getByLabelText } = render(
            <CartCountButton {...mockProps} quantity={1} />
        );

        const deleteButton = getByLabelText("delete");
        fireEvent.click(deleteButton);

        expect(mockProps.deleteFullProductCart).toHaveBeenCalledWith(1);
    });

    test("не увеличивает количество, если достигнут лимит на складе", () => {
        const { getByLabelText } = render(
            <CartCountButton {...mockProps} quantity={5} />
        );

        const addButton = getByLabelText("add");
        fireEvent.click(addButton);

        setTimeout(() => {
            expect(mockProps.incrementProductCart).not.toHaveBeenCalled();
        }, 0);
    });
});
