import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Story } from "./story.component";

const meta = {
  title: "Sections/Story",
  component: Story,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Story>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
