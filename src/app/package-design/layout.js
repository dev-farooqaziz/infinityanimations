//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Package Design",
  description: "Package Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Package Design',
    description: 'Package Design',
    url: '/package-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/package-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}