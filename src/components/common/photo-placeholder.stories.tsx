import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PhotoPlaceholder } from "./photo-placeholder";

const meta = {
  title: "Common/PhotoPlaceholder",
  component: PhotoPlaceholder,
  args: {
    label: (
      <>
        Foto vertical de ustedes
        <br />
        ideal 4:5
      </>
    ),
  },
} satisfies Meta<typeof PhotoPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SobrePapel: Story = {};

export const SobreBandaOscura: Story = {
  args: { onDark: true },
  globals: { backgrounds: { value: "olive" } },
};

export const ConZoomAlHover: Story = {
  args: { zoomOnHover: true },
};
