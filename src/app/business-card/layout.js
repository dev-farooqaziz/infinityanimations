//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Business Card",
  description: "Business Card",
  //===== OG Tags =====
  openGraph: {
    title: 'Business Card',
    description: 'Business Card',
    url: '/business-card',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/business-card' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}