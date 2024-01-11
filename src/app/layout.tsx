

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

interface OpenGraph {
  type: string;
  locale: string;
  url: string;
  title: string;
  description: string;
  images: { url: string; alt: string }[];
  siteName: string;
}

interface ExtendedMetadata extends Metadata {
  openGraph: OpenGraph;
  canonical: string;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: ExtendedMetadata = {
  title: 'Bus Ticket Booking in Nepal',
  description:
    'Book bus tickets in Nepal online with ease. Choose your destination and travel comfortably. Secure and convenient bus ticket booking at Okay Journey.',
  canonical: 'https://www.okayjourney.com/bus-ticket-booking-nepal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.okayjourney.com/bus-ticket-booking-nepal',
    title: 'Bus Ticket Booking in Nepal',
    description:
      'Book bus tickets in Nepal online with ease. Choose your destination and travel comfortably. Secure and convenient bus ticket booking at Okay Journey.',
    images: [
      {
        url: 'https://www.okayjourney.com/bus-ticket-booking-nepal.jpg',
        alt: 'Bus ticket booking in Nepal',
      },
    ],
    siteName: 'Okay Journey',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
