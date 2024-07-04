import { StoryObj, Meta } from "@storybook/react";
import FaqQuestion from "./FaqQuestion";

const meta: Meta = {
    title: "Molecules/FaqQuestion",
    component: FaqQuestion,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FaqQuestion>;

export const AnswerOpen: Story = {
    args: {
        faq: {
            id: 1,
            question: "Question 1",
            answer: "Long answer to the first question",
        },
    },
};
export const AnswerClose: Story = {
    args: {
        faq: {
            id: 2,
            question: "Question 2",
            answer: "Long answer to the first question",
        },
    },
};
