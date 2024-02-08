import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/about/AboutSection";
import PremiumSection from "@/components/premium/PremiumSection";
import MainLayout from "@/components/shared/MainLayout";
import { endpoints } from "@/utils/endpoints";
import axios from "axios";

export async function generateMetadata({ searchParams }) {
  try {
    const ogData = await axios
      .post(
        `${process.env.API_URL}${endpoints.ogData.get}?id=${searchParams.id}&type=${searchParams.type}`,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.API_KEY,
          },
        }
      )
      .then((res) => res.data);

    return {
      title: "Melo Music",
      description:
        "Melo Music is a music streaming service that allows you to listen to your favorite songs and artists.",
      openGraph: {
        title: ogData.title,
        description: ogData.description,
        images: ogData.image,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

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
