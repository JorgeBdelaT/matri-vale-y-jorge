import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DressCode } from "./dress-code.component";

const meta = {
  title: "Sections/DressCode",
  component: DressCode,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof DressCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
