import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'System Design projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}