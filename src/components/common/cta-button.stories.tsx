import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CtaButton } from "./cta-button";

const meta = {
  title: "Common/CtaButton",
  component: CtaButton,
  args: {
    href: "https://example.com",
    children: "Confirmar asistencia",
  },
} satisfies Meta<typeof CtaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = { args: { variant: "dark" } };

export const Light: Story = {
  args: { variant: "light" },
  globals: { backgrounds: { value: "burgundy" } },
};

export const Outline: Story = {
  args: { variant: "outline" },
  render: (args) => (
    <div className="text-burgundy">
      <CtaButton {...args} />
    </div>
  ),
};
