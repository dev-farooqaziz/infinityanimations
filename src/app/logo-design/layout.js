//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Logo Design",
  description: "Logo Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Logo Design',
    description: 'Logo Design',
    url: '/logo-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/logo-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}