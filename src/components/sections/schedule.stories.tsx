import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Schedule } from "./schedule";

const meta = {
  title: "Sections/Schedule",
  component: Schedule,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Schedule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
