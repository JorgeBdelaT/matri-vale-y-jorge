import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GiftList } from "./gift-list";

const meta = {
  title: "Sections/GiftList",
  component: GiftList,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof GiftList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
