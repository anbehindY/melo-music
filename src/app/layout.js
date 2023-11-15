import './globals.css';
import { Faustina, Instrument_Sans } from 'next/font/google';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Melo Music',
	description: 'Melo Music is a music streaming service that allows you to listen to your favorite songs and artists.',
};

export const faustina = Faustina({
	subsets: ['latin'],
	variable: '--font-faustina',
	display: 'auto',
});

export const instrument_sans = Instrument_Sans({
	subsets: ['latin'],
	variable: '--font-instrument-sans',
	display: 'auto',
});

// bg-[#110F0F]
export default function RootLayout({ children }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`${instrument_sans.variable} ${faustina.variable}`}>
				<div className='bg-right-upper-gradient lg:bg-right-upper-lg bg-no-repeat bg-right-top'>
					<div className='bg-left-upper-gradient lg:bg-left-upper-lg bg-no-repeat bg-[0_6%]'>
						<div className='bg-left-lower-gradient lg:bg-left-lower-lg bg-no-repeat bg-[0_65%] lg:bg-[0_85%]'>
							<div className='bg-right-lower-gradient lg:bg-right-lower-lg bg-no-repeat bg-[100%_92%]'>
								<Navigation />
								{children}
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
