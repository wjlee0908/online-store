import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Counter } from "../ui/counter";

const meta = {
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

export const CounterStory: StoryObj<typeof meta> = {
  args: {
    value: 0,
    onChange: () => {},
  },
};
