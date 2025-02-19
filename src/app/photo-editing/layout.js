//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Photo Editing",
  description: "Photo Editing",
  //===== OG Tags =====
  openGraph: {
    title: 'Photo Editing',
    description: 'Photo Editing',
    url: '/photo-editing',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/photo-editing' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}