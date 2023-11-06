import React from 'react';
import IntroSection from './IntroSection';
import AboutSection from './about/AboutSection';

const MainSection = () => {
	return (
		<main className='flex flex-col items-center'>
			<IntroSection />
			<AboutSection />
		</main>
	);
};

export default MainSection;
