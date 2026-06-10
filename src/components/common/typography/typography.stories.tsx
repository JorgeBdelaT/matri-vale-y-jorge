import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DisplayTitle, Eyebrow, Lead, SectionTitle } from "./typography.component";

const meta = {
  title: "Common/Typography",
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Jerarquia: Story = {
  render: () => (
    <div className="space-y-8 p-8 text-center text-ink">
      <div>
        <Eyebrow>Eyebrow · etiqueta superior</Eyebrow>
        <DisplayTitle>Vale &amp; Jorge</DisplayTitle>
      </div>
      <SectionTitle>Título de sección</SectionTitle>
      <Lead>
        Lead: párrafo introductorio con interlineado amplio, pensado para
        bajadas breves bajo cada título.
      </Lead>
    </div>
  ),
};
