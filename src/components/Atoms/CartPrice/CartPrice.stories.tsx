import { Meta, StoryObj } from "@storybook/react";
import CartPrice from "./CartPrice";

const meta: Meta = {
    title: "Atoms/CartPrice",
    component: CartPrice,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CartPrice>;

export const Default: Story = {
    args: {
        totalPrice: 11,
        discountPrice: 11,
        totalQuantity: 11,
    },
};
