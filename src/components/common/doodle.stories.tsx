import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Doodle, type DoodleVariant } from "./doodle";

const VARIANTS: DoodleVariant[] = [
  "branch",
  "bird",
  "calendar",
  "heart-leaf",
  "flower",
  "candle",
  "camera",
  "dress",
  "envelope",
  "music",
  "gift",
];

const meta = {
  title: "Common/Doodle",
  component: Doodle,
  args: { variant: "branch", position: "tl", rotation: -8 },
} satisfies Meta<typeof Doodle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Individual: Story = {
  render: (args) => (
    <div className="relative h-64 w-80 text-burgundy">
      <Doodle {...args} />
    </div>
  ),
};

export const Catalogo: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4 p-4">
      {VARIANTS.map((variant) => (
        <div
          key={variant}
          className="relative h-44 rounded-2xl border border-burgundy/15 text-burgundy"
        >
          <Doodle variant={variant} position="tl" className="!left-6 !top-4 w-28 opacity-60" />
          <span className="absolute bottom-2 left-0 right-0 text-center text-xs font-bold uppercase tracking-widest">
            {variant}
          </span>
        </div>
      ))}
    </div>
  ),
};
