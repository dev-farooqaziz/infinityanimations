//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Our Portfolio",
  description: "Our Portfolio",
  //===== OG Tags =====
  openGraph: {
    title: 'Our Portfolio',
    description: 'Our Portfolio',
    url: '/our-portfolio',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/our-portfolio' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}