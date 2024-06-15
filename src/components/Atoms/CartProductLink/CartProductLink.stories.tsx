import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ICartProduct } from "../../../interfaces/data";
import CartProductLink from "./CartProductLink";

type ICartProductLink = Omit<
    ICartProduct,
    "discountPercentage" | "discountedTotal" | "total"
>;

const meta: Meta<typeof CartProductLink> = {
    title: "Atoms/CartProductLink",
    component: CartProductLink,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof CartProductLink>;

const sampleProduct1: ICartProductLink = {
    id: 1,
    price: 10,
    quantity: 2,
    thumbnail: "https://via.placeholder.com/150",
    title: "Sample Product 1",
};

const sampleProduct2: ICartProductLink = {
    id: 2,
    price: 20,
    quantity: 1,
    thumbnail: "https://via.placeholder.com/150",
    title: "Sample Product 2",
};

export const Default: Story = {
    args: {
        product: sampleProduct1,
    },
};

export const AnotherProduct: Story = {
    args: {
        product: sampleProduct2,
    },
};
