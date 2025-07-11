import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import React from "react";
import clsx from "clsx";
import { pretendard } from "../src/styles/fonts";

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

    decorators: [
      (Story) => (
        <div className={clsx(pretendard.className, "antialiased")}>
          <Story />
        </div>
      ),
    ],

    staticDirs: [
      {
        from: "../src/styles/fonts",
        to: "src/styles/fonts",
      },
    ],
  },
};

export default preview;
