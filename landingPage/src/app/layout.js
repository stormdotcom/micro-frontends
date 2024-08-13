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
    default: "Hotspot Mobiles | Mobile Service & Sales Karyavattom",
    template: "%s | Hotspot Mobiles"
  },
  description: "Hotspot Mobiles offers the best mobile sales, service, and software solutions in Kazhakuttom and Karyavattom. We provide top-quality mobile repairs, accessories, and the latest smartphones at competitive prices. Visit us for expert mobile service, fast repairs, and a wide range of mobile products.",
  keywords: "best mobile shop Kazhakuttom, best mobile shop Karyavattom, mobile repair Kazhakuttom, mobile accessories Kazhakuttom, mobile sales Karyavattom, smartphone shop Kazhakuttom, mobile service center Kazhakuttom, mobile repairs Karyavattom",
};

export default function RootLayout({ children }) {
  const NavigationComponent = () => <Navigation />;
  const SearchBarComponent = () => <SearchBar placeholder="Search products..." />;
  const LoginComponent = () => <Login />
  const MiddleFooterComponent = () => <MiddleFooter />
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"></link>
      <body>
        <Header NavigationComponent={NavigationComponent} SearchBarComponent={SearchBarComponent} LoginComponent={LoginComponent} />
        <MenuHeader />
        {children}
        <Footer MiddleFooterComponent={MiddleFooterComponent} />
      </body>
    </html>
  );
}
