import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sadan Nirman",
    template: "%s | Sadan Nirman",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body>{children}</body>
  </html>
);

export default RootLayout;
