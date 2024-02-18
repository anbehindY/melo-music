import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({ children, isLoggedIn = false }) {
  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </>
  );
}
