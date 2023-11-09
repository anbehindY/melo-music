import Image from 'next/image';
import MainSection from '../components/MainSection';
import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';


export default function Home() {
	return (
		<>
			<Navigation />
			<MainSection />
			<Footer />
		</>
	);
}
