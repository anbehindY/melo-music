import React from 'react';
import Image from 'next/image';
import { ARTISTS } from '@/utils/data';
import Artist from './Artist';

const AboutSection = () => {
	return (
		<section className='flex flex-col items-center gap-20'>
			<div className='flex flex-col gap-6 items-center'>
				<h2 className='text-[36px] font-semibold'>
					Take a look at <span className='gradient'>Melo</span>
				</h2>
				<video controls width='250' className='rounded-sm w-full'>
					<source src='/path/to/video.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className='flex flex-col gap-6 items-center'>
				<h2 className='text-[36px] font-semibold'>
					Our top{' '}
					<span className='bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]'>
						Artists
					</span>
				</h2>
				<div className='flex gap-4 justify-center'>
					{ARTISTS.map((artist) => (
						<Artist artist={artist} key={artist} />
					))}
				</div>
			</div>
			<div className='flex flex-col gap-6 items-center'>
				<h2 className='text-[36px] font-semibold text-center leading-[42px]'>
					Personalized<span className='break-line'></span>
					<span className='gradient'> Playlists</span>
				</h2>
				<p className='px-8 font-[16px] leading-6 tracking-widest'>
					No Wi-Fi? No problem. Download your favorite tracks and enjoy them on
					the go, Anytime, Anywhere.
				</p>
				<Image
					src='/playlist.svg'
					width={215}
					height={215}
					alt='playlist art'
				/>
			</div>
			<div className='flex flex-col gap-6 items-center'>
				<h2 className='text-[36px] font-semibold text-center leading-[42px]'>
					Offline <span className='gradient'>Listening</span>
				</h2>
				<p className='px-8 font-[16px] leading-6 tracking-widest'>
					No Wi-Fi? No problem. Download your favorite tracks and enjoy them on
					the go, Anytime, Anywhere.
				</p>
				<Image
					src='/listening.svg'
					width={215}
					height={215}
					alt='listening art'
				/>
			</div>
			<div className='flex flex-col gap-6 items-center'>
				<h2 className='text-[36px] font-semibold text-center leading-[42px]'>
					Discover{' '}
					<span className='gradient'>
						New <span className='break-line'></span>Music
					</span>
				</h2>
				<p className='px-8 font-[16px] leading-6 tracking-widest'>
					No Wi-Fi? No problem. Download your favorite tracks and enjoy them on
					the go, Anytime, Anywhere.
				</p>
				<Image
					src='/newMusic.svg'
					width={215}
					height={215}
					alt='New music art'
				/>
			</div>
			<div className='flex gap-4 h-[400px] justify-center'></div>
		</section>
	);
};

export default AboutSection;
