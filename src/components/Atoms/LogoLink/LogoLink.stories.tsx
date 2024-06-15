import { StoryObj, Meta } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import LogoLink from "./LogoLink";

const meta: Meta = {
    title: "Atoms/LogoLink",
    component: LogoLink,
    decorators: [
        (Story) => (
            <Router>
                <Story />
            </Router>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof LogoLink>;

export const Default: Story = {};
