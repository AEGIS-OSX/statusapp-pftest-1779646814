import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'statusapp-pftest-1779646814',
  description: 'AEGIS-generated project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
