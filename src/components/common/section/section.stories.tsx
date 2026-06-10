import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Eyebrow, Lead, SectionTitle } from "../typography/typography.component";
import { Section, SectionContainer } from "./section.component";

const meta = {
  title: "Common/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  args: {
    center: true,
    children: (
      <SectionContainer>
        <Eyebrow>Sección</Eyebrow>
        <SectionTitle>Banda de contenido</SectionTitle>
        <Lead>
          Cada banda alterna papel, burdeo y oliva con una textura sutil de
          papel.
        </Lead>
      </SectionContainer>
    ),
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paper: Story = { args: { variant: "paper" } };
export const Burgundy: Story = { args: { variant: "burgundy" } };
export const Olive: Story = { args: { variant: "olive" } };
