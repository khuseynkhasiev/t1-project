import { Meta, StoryObj } from "@storybook/react";
import CartPrice from "./CartPrice";
// import { Provider } from "react-redux";
// import { store } from "../../../store";

const meta: Meta = {
    title: "Atoms/CartPrice",
    component: CartPrice,
    // decorators: [
    //     (Story) => (
    //         <Provider store={store}>
    //             <Story />
    //         </Provider>
    //     ),
    // ],
};

export default meta;

type Story = StoryObj<typeof CartPrice>;

type StoryArgs = {
    totalPrice: number;
    discountPrice: number;
    totalQuantity: number;
};

export const Default: Story = (args: StoryArgs) => <CartPrice {...args} />;

Default.args = {
    totalPrice: 11,
    discountPrice: 11,
    totalQuantity: 11,
};
