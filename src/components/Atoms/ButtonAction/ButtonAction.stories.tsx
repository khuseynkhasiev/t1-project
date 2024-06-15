import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ButtonAction from "./ButtonAction";

// Определение метаданных для компонента
const meta: Meta = {
    title: "Atoms/ButtonAction",
    component: ButtonAction,
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

// Определение историй

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
