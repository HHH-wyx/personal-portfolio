import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import data from '@/content/data.json';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${data.personal.name} - ${data.personal.title}`,
  description: data.personal.bio,
  keywords: data.about.skills.join(', '),
  authors: [{ name: data.personal.name }],
  openGraph: {
    title: `${data.personal.name} - ${data.personal.title}`,
    description: data.personal.bio,
    type: 'website',
    locale: 'zh_CN',
    siteName: `${data.personal.name} 的个人主页`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${data.personal.name} - ${data.personal.title}`,
    description: data.personal.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

