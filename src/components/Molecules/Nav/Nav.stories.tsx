import { StoryObj, Meta } from "@storybook/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";

const meta: Meta<typeof Nav> = {
    title: "Molecules/Nav",
    component: Nav,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Router>
                    <Story />
                </Router>
            </Provider>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {};
