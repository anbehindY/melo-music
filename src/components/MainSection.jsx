import React from 'react';
import IntroSection from './IntroSection';
import AboutSection from './about/AboutSection';
import PremiumSection from './premium/PremiumSection';

const MainSection = () => {
	return (
		<main className='flex flex-col items-center gap-4'>
			<IntroSection />
			<AboutSection />
			<PremiumSection />
		</main>
	);
};

export default MainSection;
