import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Countdown } from "./countdown";

const meta = {
  title: "Sections/Countdown",
  component: Countdown,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
