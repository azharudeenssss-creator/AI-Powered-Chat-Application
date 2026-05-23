import './globals.css';

export const metadata = {
  title: 'AI Native App',
  description: 'AI Fullstack SaaS',
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