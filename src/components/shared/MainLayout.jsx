import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import GradientBackground from "./GradientBackground";

export default function MainLayout({ children }) {
  return (
    <GradientBackground>
      <Navigation />
      {children}
      <Footer />
    </GradientBackground>
  );
}
