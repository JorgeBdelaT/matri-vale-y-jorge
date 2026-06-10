import type { Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        ivory: { name: "Ivory", value: "#f8f0df" },
        burgundy: { name: "Burgundy", value: "#4b0f18" },
        olive: { name: "Olive", value: "#68743a" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "ivory" },
  },
  decorators: [
    (Story) => (
      <div
        style={
          {
            // En la app estas variables las define next/font; aquí se cargan
            // las mismas familias desde Google Fonts (preview-head.html).
            "--font-cormorant": "'Cormorant Garamond', Georgia, serif",
            "--font-inter": "'Inter', system-ui, sans-serif",
            fontFamily: "var(--font-inter)",
          } as React.CSSProperties
        }
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
