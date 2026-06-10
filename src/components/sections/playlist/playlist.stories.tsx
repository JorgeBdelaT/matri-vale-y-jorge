import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Playlist } from "./playlist.component";

const meta = {
  title: "Sections/Playlist",
  component: Playlist,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Playlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
