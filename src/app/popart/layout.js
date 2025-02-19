//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Pop Art",
  description: "Pop Art",
  //===== OG Tags =====
  openGraph: {
    title: 'Pop Art',
    description: 'Pop Art',
    url: '/popart',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/popart' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}