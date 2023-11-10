import React from 'react';
import Image from 'next/image';
import { HiArrowDown } from 'react-icons/hi';

const IntroSection = () => {
	return (
		<section className='flex h-[800px] flex-col items-center px-6 py-12'>
			<div>
				<Image src='/melo-icon.svg' width={168} height={168} alt='Melo icon' />
			</div>
			<div>
				<div className='flex flex-col items-center gap-[12px]'>
					<h1 className='text-[39px] gradient'>
						Melo <span className='text-white font-semibold'>to your</span> Heart
					</h1>
					<p className='font-[16px] leading-6 tracking-widest'>
						With Melo Music, you can download and enjoy wide varieties of songs
						from classic traditional songs to epic trending music genres.
					</p>
					<button
						className='bg-[#FF2150] shadow-listen-btn mt-4 w-[192] h-[59px] text-white font-semibold
          text-[18px] leading-6 px-10 py-3 rounded-[30px] hover:bg-transparent hover:shadow-none hover:border-2 hover:border-[#FF5276] hover:text-[#FF5276]'
					>
						Listen Now
					</button>
					<div className='flex flex-col items-center mt-8'>
						<a
							href='https://apps.apple.com/us/app/melo-music/id1478494134?itsct=apps_box_badge&amp;itscg=30200'
							style={{
								display: 'block',
								width: '150px',
								height: '60px',
							}}
							target='_blank'
						>
							<Image
								src='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'
								width={150}
								height={40}
								alt='Download on the App Store'
								style={{ width: '100%', height: '100%' }}
							/>
						</a>
						<a
							href='https://play.google.com/store/apps/details?id=com.melomm.melomusic&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
							style={{
								display: 'block',
								width: '170px',
								height: '70px',
							}}
							target='_blank'
						>
							<Image
								src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
								width={170}
								height={70}
								alt='Get it on Google Play'
								style={{ width: '100%', height: '100%' }}
							/>
						</a>
					</div>
					<button className='flex justify-center items-center w-[40px] h-[40px] mt-4 rounded-full border-[3px] border-white hover:border-none hover:bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]'>
						<a href='#premiumSection'>
							<HiArrowDown className='p-1 text-white text-center text-3xl rounded-full hover:shadow-down-arrow' />
						</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
