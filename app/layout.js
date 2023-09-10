import React from 'react';

import './globals.css'
import { Inter } from 'next/font/google'
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suraj Jindal | Blog',
  description: 'A next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={inter.className}><Header/>{children}<Footer /></body>
      </html>
  )
}
