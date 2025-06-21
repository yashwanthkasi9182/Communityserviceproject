import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenCare Initiative - Community Service Projects',
  description: 'Empowering communities through sustainable development projects in water facilities, reforestation, and organic farming.',
  keywords: 'community service, sustainable development, water facilities, reforestation, organic farming',
  authors: [{ name: 'GreenCare Initiative' }],
  openGraph: {
    title: 'GreenCare Initiative - Community Service Projects',
    description: 'Empowering communities through sustainable development projects',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">GreenCare Initiative</h3>
                <p className="text-gray-300">
                  Empowering communities through sustainable development projects
                  that create lasting positive impact.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="text-gray-300 space-y-2">
                  <p>Email: info@greencareinitiative.org</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: 123 Green Street, Eco City, IN 110001</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 GreenCare Initiative. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}