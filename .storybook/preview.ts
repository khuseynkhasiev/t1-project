import type { Preview } from "@storybook/react";
import "../src/vendor/reset.css";
import "../src/global.scss";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
