import React from 'react';
import Image from 'next/image';

const Artist = ({ artist }) => {
	return (
		<div
			className='w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-artist-img'
			key={artist}
		>
			<Image
				src={`/artists/${artist}.svg`}
				width={66}
				height={66}
				styles={{ width: 'auto', height: 'auto' }}
				alt='artist photo'
			/>
		</div>
	);
};

export default Artist;
