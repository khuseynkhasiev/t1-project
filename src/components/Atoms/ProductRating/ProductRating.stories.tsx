import { StoryObj, Meta } from "@storybook/react";
import ProductRating from "./ProductRating";

const meta: Meta = {
    title: "Atoms/ProductRating",
    component: ProductRating,
};

export default meta;

type Story = StoryObj<typeof ProductRating>;

export const Rating1: Story = {
    args: { rating: 1 },
};

export const Rating2: Story = {
    args: { rating: 2 },
};

export const Rating3: Story = {
    args: { rating: 3 },
};

export const Rating4: Story = {
    args: { rating: 4 },
};

export const Rating5: Story = {
    args: { rating: 5 },
};
