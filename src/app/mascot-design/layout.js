//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mascot Design",
  description: "Mascot Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Mascot Design',
    description: 'Mascot Design',
    url: '/mascot-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mascot-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}