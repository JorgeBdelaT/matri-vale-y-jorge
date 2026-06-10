import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CopyCode } from "./copy-code.component";

const meta = {
  title: "Common/CopyCode",
  component: CopyCode,
  args: {
    label: "Código novios",
    code: "6970877",
    hint: "Toca para copiar",
    copiedMessage: "¡Copiado!",
  },
  globals: { backgrounds: { value: "olive" } },
  decorators: [
    (Story) => (
      <div className="p-8 text-paper">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CopyCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
