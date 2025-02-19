//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Flyer Design",
  description: "Flyer Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Flyer Design',
    description: 'Flyer Design',
    url: '/flyer-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/flyer-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}