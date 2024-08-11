import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-800 text-white">
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
