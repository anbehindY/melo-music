import React from 'react';
import Image from 'next/image';

const Artist = ({ artist, name }) => {
	return (
		<div className='flex flex-col items-center gap-1'>
			<div
				className='relative w-[65px] h-[65px] lg:w-[243px] lg:h-[243px] rounded-full flex items-center justify-center !shadow-artist-img'
				key={artist}
			>
				<Image
					src={`/artists/${artist}.png`}
					fill
					style={{ objectFit: 'contain' }}
					alt='artist photo'
				/>
			</div>
			<span className='tracking-tight text-center text-sm lg:text-[32px] lg:leading-[31px] lg: mt-4'>
				{name}
			</span>
		</div>
	);
};

export default Artist;
