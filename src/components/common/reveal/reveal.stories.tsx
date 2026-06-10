import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Reveal } from "./reveal.component";

const meta = {
  title: "Common/Reveal",
  component: Reveal,
  args: {
    children: (
      <p className="rounded-3xl border border-burgundy/15 bg-paper p-10 text-center text-ink">
        Este bloque aparece con un fade-up al entrar en el viewport.
      </p>
    ),
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ConRetraso: Story = { args: { delay: 0.6 } };
