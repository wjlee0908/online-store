import type { Preview } from "@storybook/nextjs-vite";
import "@app/styles/globals.css";
import React from "react";
import clsx from "clsx";
import { pretendard } from "../src/app/styles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    staticDirs: [
      {
        from: "../src/styles/fonts",
        to: "src/styles/fonts",
      },
    ],
  },

  decorators: [
    (Story) => (
      <div
        className={clsx(pretendard.className, "antialiased")}
        style={pretendard.style}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
