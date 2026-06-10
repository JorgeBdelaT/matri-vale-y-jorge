import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Location } from "./location.component";

const meta = {
  title: "Sections/Location",
  component: Location,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
