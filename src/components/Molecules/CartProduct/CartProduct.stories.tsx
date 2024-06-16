import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import CartProduct from "./CartProduct";
import { ICartProduct } from "../../../interfaces/data";

const meta: Meta<typeof CartProduct> = {
    title: "Molecules/CartProduct",
    component: CartProduct,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof CartProduct>;

const sampleProduct1: ICartProduct = {
    discountPercentage: 10,
    discountedTotal: 100,
    total: 200,
    id: 1,
    price: 10,
    quantity: 20,
    thumbnail: "https://via.placeholder.com/150",
    title: "Sample Product 1",
};

const sampleProduct2: ICartProduct = {
    discountPercentage: 10,
    discountedTotal: 100,
    total: 200,
    id: 2,
    price: 20,
    quantity: 1,
    thumbnail: "https://via.placeholder.com/150",
    title: "Sample Product 2",
};

export const Product1: Story = {
    args: {
        product: sampleProduct1,
    },
};

export const Product2: Story = {
    args: {
        product: sampleProduct2,
    },
};
