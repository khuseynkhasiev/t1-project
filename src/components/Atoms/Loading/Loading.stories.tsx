import { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta = {
    title: "Atoms/Loading",
    component: Loading,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
