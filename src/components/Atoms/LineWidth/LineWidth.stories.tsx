import { Meta, StoryObj } from "@storybook/react";
import LineWidth from "./LineWidth";

const meta: Meta<typeof LineWidth> = {
    title: "Atoms/LineWidth",
    component: LineWidth,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LineWidth>;

export const Default: Story = {
    args: {
        color: "blue",
    },
};
