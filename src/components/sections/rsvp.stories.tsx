import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Rsvp } from "./rsvp";

const meta = {
  title: "Sections/Rsvp",
  component: Rsvp,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Rsvp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
