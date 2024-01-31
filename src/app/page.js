import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/about/AboutSection";
import PremiumSection from "@/components/premium/PremiumSection";
import MainLayout from "@/components/shared/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="flex flex-col items-center gap-4">
        <IntroSection />
        <AboutSection />
        <PremiumSection />
      </main>
    </MainLayout>
  );
}
