//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Magazine Design",
  description: "Magazine Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Magazine Design',
    description: 'Magazine Design',
    url: '/magazine-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/magazine-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}