import { render } from "@testing-library/react";
import ProductRating from "./ProductRating";

describe("ProductRating", () => {
    test("отображает правильное количество звезд на основе рейтинга", () => {
        // Тест для рейтинга 3
        const { container } = render(<ProductRating rating={3} />);
        const paths = container.querySelectorAll("path");
        expect(paths.length).toBe(3);

        // Тест для рейтинга 5
        const { container: container5 } = render(<ProductRating rating={5} />);
        const paths5 = container5.querySelectorAll("path");
        expect(paths5.length).toBe(5);

        // Тест для рейтинга 0
        const { container: container0 } = render(<ProductRating rating={0} />);
        const paths0 = container0.querySelectorAll("path");
        expect(paths0.length).toBe(0);

        // Тест для рейтинга 2.5 (должен округляться до 3)
        const { container: container25 } = render(
            <ProductRating rating={2.5} />
        );
        const paths25 = container25.querySelectorAll("path");
        expect(paths25.length).toBe(3);
    });
});
