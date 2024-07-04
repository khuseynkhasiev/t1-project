import { Meta, StoryObj } from "@storybook/react";
import CartCountButton from "./CartCountButton";

const meta: Meta = {
    title: "Atoms/CartCountButton",
    tags: ["autodocs"],
    component: CartCountButton,
};

export default meta;

type Story = StoryObj<typeof CartCountButton>;

export const Default: Story = {
    args: {
        quantity: 11,
    },
};
