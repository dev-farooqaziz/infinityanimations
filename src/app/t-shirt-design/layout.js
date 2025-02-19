//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "T-shirt Design",
  description: "T-shirt Design",
  //===== OG Tags =====
  openGraph: {
    title: 'T-shirt Design',
    description: 'T-shirt Design',
    url: '/t-shirt-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/t-shirt-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}