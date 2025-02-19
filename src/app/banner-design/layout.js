//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Banner Design",
  description: "Banner Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Banner Design',
    description: 'Banner Design',
    url: '/banner-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/banner-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}