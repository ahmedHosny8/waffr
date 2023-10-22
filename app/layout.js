import './globals.css';

export const metadata = {
  title: 'Waffr',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-almarai text-gray-900">{children}</body>
    </html>
  );
}
