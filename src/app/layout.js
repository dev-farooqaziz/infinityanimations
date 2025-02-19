//===== Import Fonts =====
import { primary } from "./configs/fonts";
//===== Import Components =====
import ConditionalLayout from "./ConditionalLayout";
//===== Import Css =====
import "./global.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://infinityanimations.com/"),
  //===== Meta Tags =====
  title: "Video Animation Company - Infinity Animations",
  description:
    "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively.",
  //===== OG Tags =====
  openGraph: {
    title: "Video Animation Company - Infinity Animations",
    description:
      "Video Animation Services, Explore a diverse range of professional animation services to captivate your audience and convey your message effectively.",
    url: "/",
    siteName: "Infinity Animations",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  //===== GEO Tags =====
  // other: {
  //   "DC.title": "Video Animation Company - Infinity Animations",
  //   "geo.region": "US",
  //   "geo.position": "39.78373;-100.445882",
  //   "ICBM": "39.78373, -100.445882",
  //   //==========
  //   "DC.title": "Video Animation Company - Infinity Animations",
  //   "geo.region": "US-NY",
  //   "geo.position": "39.78373;-100.445882",
  //   "ICBM": "39.78373, -100.445882",
  //   //==========
  //   "DC.title": "Video Animation Company - Infinity Animations",
  //   "geo.region": "US-NY",
  //   "geo.placename": "New York",
  //   "geo.position": "39.78373;-100.445882",
  //   "ICBM": "39.78373, -100.445882"
  // },
  //===== Google Varification =====
  verification: {
    other: {
      // "google-site-verification": ['dgOXThSlUP6xd-daxjwI8uQqVYkhfbL_Ey51mNVEUzU'],
      // "facebook-domain-verification": ['uhlazbr6xlgoc54qqmaefth2rflawm'],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primary.variable}`}>
        <ConditionalLayout>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
