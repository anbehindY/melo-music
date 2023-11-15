'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowDown } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const IntroSection = () => {
	const [hover, setHover] = React.useState(false);

	return (
		<section className='flex flex-col items-center lg:items-start px-6 py-12 lg:gap-6 lg:justify-center lg:pt-10'>
			<div className='flex flex-col items-center lg:flex-row-reverse'>
				<div className='relative w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]'>
					<Image
						src='/meloIcon.svg'
						fill
						quality={100}
						priority
						style={{ objectFit: 'contain' }}
						alt='Melo icon'
						unoptimized
					/>
				</div>
				<div className='flex flex-col items-center gap-[12px] w-full lg:items-start lg:gap-0'>
					<h1 className='text-[39px] gradient lg:text-[96px] lg:leading-[93px] lg:w-[510px] lg:mb-6'>
						Melo <span className='text-white font-semibold'>to your</span> Heart
					</h1>
					<p className='font-[16px] leading-6 tracking-widest lg:w-[600px] lg:mb-4'>
						With Melo Music, you can download and enjoy wide varieties of songs
						from classic traditional songs to epic trending music genres.
					</p>
					<button
						className='bg-[#FF2150] shadow-listen-btn mt-4 w-[192px] h-[59px] text-white font-semibold
          			text-[18px] leading-6 duration-[0.5s] rounded-[30px] hover:bg-transparent hover:shadow-none hover:border-2 hover:border-[#FF5276] hover:text-[#FF5276]'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						Listen Now
						{hover && (
							<BsArrowRight className='inline-block ml-2 text-[#FF5276]' />
						)}
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center mt-8 lg:mt-0 lg:flex-row gap-6 lg:gap-0'>
				<a
					href='https://apps.apple.com/us/app/melo-music/id1478494134?itsct=apps_box_badge&amp;itscg=30200'
					style={{
						display: 'block',
						width: '195px',
						height: '40px',
					}}
					target='_blank'
				>
					<Image
						src='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'
						width={195}
						height={59}
						alt='Download on the App Store'
						style={{ width: '195px', height: '59px' }}
					/>
				</a>
				<a
					href='https://play.google.com/store/apps/details?id=com.melomm.melomusic&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
					style={{
						display: 'block',
						width: '200px',
						height: '63px',
					}}
					target='_blank'
				>
					<Image
						src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
						alt='Get it on Google Play'
						width={200}
						height={85}
						style={{ width: '200px', height: '85px' }}
					/>
				</a>
			</div>
			<button className='flex justify-center mx-auto items-center w-[40px] h-[40px] lg:w-12 lg:h-12 lg:border-[3.5px] mt-12 rounded-full border-[3px] border-white hover:border-none hover:bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]'>
				<a href='#premiumSection'>
					<HiArrowDown className='p-1 text-white text-center text-3xl lg:text-4xl rounded-full hover:shadow-down-arrow' />
				</a>
			</button>
		</section>
	);
};

export default IntroSection;
