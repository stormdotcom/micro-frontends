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
  title: "Hotspot Mobiles",
  description: "Mobiles Service & Software Services | Mobile Service Kazhakuttom",
};

export default function RootLayout({ children }) {
  const NavigationComponent = () => <Navigation />;
  const SearchBarComponent = () => <SearchBar placeholder="Search products..." />;
  const LoginComponent = () => <Login />
  const MiddleFooterComponent = () => <MiddleFooter />
  return (
    <html lang="en">
      <body>
        <Header NavigationComponent={NavigationComponent} SearchBarComponent={SearchBarComponent} LoginComponent={LoginComponent} />
        <MenuHeader />
        {children}
        <Footer MiddleFooterComponent={MiddleFooterComponent} />
      </body>
    </html>
  );
}
