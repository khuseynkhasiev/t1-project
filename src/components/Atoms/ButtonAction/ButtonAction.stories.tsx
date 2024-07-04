import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ButtonAction from "./ButtonAction";

const meta: Meta = {
    title: "Atoms/ButtonAction",
    component: ButtonAction,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof ButtonAction>;

export const AsLink: Story = {
    args: {
        tag: "link",
        link: "/example",
        text: "Go to Example",
    },
};

export const AsButton: Story = {
    args: {
        tag: "button",
        text: "Click Me",
        handleClickButton: () => alert("Button clicked!"),
    },
};
