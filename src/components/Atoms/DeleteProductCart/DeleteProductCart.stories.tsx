import { Meta, StoryObj } from "@storybook/react";
import DeleteProductCart from "./DeleteProductCart";

const meta: Meta = {
    title: "Atoms/DeleteProductCart",
    component: DeleteProductCart,
};

export default meta;

type Story = StoryObj<typeof DeleteProductCart>;

export const Default: Story = () => <DeleteProductCart />;

Default.args = {};
