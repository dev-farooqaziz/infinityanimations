//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Social Media Post",
  description: "Social Media Post",
  //===== OG Tags =====
  openGraph: {
    title: 'Social Media Post',
    description: 'Social Media Post',
    url: '/social-media-post',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/social-media-post' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}