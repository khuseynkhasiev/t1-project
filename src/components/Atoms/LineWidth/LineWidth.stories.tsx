import { Meta, StoryObj } from "@storybook/react";
import LineWidth from "./LineWidth";

const meta: Meta<typeof LineWidth> = {
    title: "Atoms/LineWidth",
    component: LineWidth,
};

export default meta;

type Story = StoryObj<typeof LineWidth>;

type StoryArgs = {
    color: string;
};

export const Default: Story = (args: StoryArgs) => <LineWidth {...args} />;

Default.args = {
    color: "blue",
};
