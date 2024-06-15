import { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta = {
    title: "Atoms/Loading",
    component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = () => <Loading />;

Default.args = {};
