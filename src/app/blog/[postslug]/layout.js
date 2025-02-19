//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Blog Inner",
  description: "Infinity Animations is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Blog Inner',
    description: 'Infinity Animations is a leading app development company with a team of expert app developers that specialize in creating innovative and customized mobile applications.',
    url: '/blog',
    siteName: 'Infinity Animations',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/blog' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}