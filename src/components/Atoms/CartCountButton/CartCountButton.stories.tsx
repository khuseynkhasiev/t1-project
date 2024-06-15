import { Meta, StoryObj } from "@storybook/react";
import CartCountButton from "./CartCountButton";

const meta: Meta = {
    title: "Atoms/CartCountButton",
    component: CartCountButton,
};

export default meta;

type Story = StoryObj<typeof CartCountButton>;

type StoryArgs = {
    quantity: number;
};

export const Default: Story = (args: StoryArgs) => (
    <CartCountButton {...args} />
);

Default.args = {
    quantity: 11,
};
