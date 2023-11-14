import IntroSection from '@/components/IntroSection';
import AboutSection from '@/components/about/AboutSection';
import PremiumSection from '@/components/premium/PremiumSection';

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-4'>
			<IntroSection />
			<AboutSection />
			<PremiumSection />
		</main>
	);
}
