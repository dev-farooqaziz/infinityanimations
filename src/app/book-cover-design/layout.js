//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Book Cover Design",
  description: "Book Cover Design",
  //===== OG Tags =====
  openGraph: {
    title: 'Book Cover Design',
    description: 'Book Cover Design',
    url: '/book-cover-design',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/book-cover-design' },
  //===== GEO Tags =====
  robots: "noindex, nofollow",
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}