import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EnvelopeIntro } from "./envelope-intro.component";

const meta = {
  title: "Sections/EnvelopeIntro",
  component: EnvelopeIntro,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EnvelopeIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
