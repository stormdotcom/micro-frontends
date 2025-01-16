import "./globals.css";
import "../styles/fonts.css";
import Header from "@/components/Project/Header";
import Footer from "@/components/Project/Footer";
import Navigation from "@/components/Header/Navigation";
import SearchBar from "@/components/Header/SearchBar";
import Login from "@/components/Header/Login";
import MiddleFooter from "@/components/Footer/MiddleFooter";
import MenuHeader from "@/components/Header/MenuHeader";

export const metadata = {
  title: {
    default: "Hotspot Mobiles | Expert Mobile Repairs & Sales in Karyavattom",
    template: "%s | Hotspot Mobiles - Karyavattom",
  },
  description:
    "Hotspot Mobiles in Kazhakuttom offers expert mobile sales, repairs, and accessories. Visit us for the latest smartphones and fast, reliable service in Karyavattom.",
  openGraph: {
    images: [
      {
        url: "https://hotspotmobiles.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotspot Mobiles | Mobile Service & Sales Karyavattom",
      },
    ],
  },
  keywords:
    "mobile shop Kazhakuttom, mobile service Karyavattom, smartphone sales, mobile repair center, mobile accessories store, phone repairs Kazhakuttom",
};

export default function RootLayout({ children }) {
  const NavigationComponent = () => <Navigation />;
  const SearchBarComponent = () => (
    <SearchBar placeholder="Search products..." />
  );
  const LoginComponent = () => <Login />;
  const MiddleFooterComponent = () => <MiddleFooter />;
  return (
    <html suppressHydrationWarning={true} lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Header
          NavigationComponent={NavigationComponent}
          SearchBarComponent={SearchBarComponent}
          LoginComponent={LoginComponent}
        />
        <MenuHeader />
        {children}
        <Footer MiddleFooterComponent={MiddleFooterComponent} />
      </body>
    </html>
  );
}
