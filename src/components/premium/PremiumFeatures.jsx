const PremiumFeatures = () => {
	return (
		<div className='flex flex-col gap-6 items-center pb-16'>
			<div className='w-[284px] h-[269px] border-gradient flex flex-col gap-4 pl-8 py-8'>
				<h4 className='gradient text-[19px] text-left'>Melo&apos;s Premium</h4>
				<ul className='flex flex-col justify-center gap-2 items-start h-4/5 text-[13.7px]'>
					<li className='list-style-tick'>
						<span className='pl-[18px]'>Ad Free Music Streaming</span>
					</li>
					<li className='list-style-tick'>
						<span className='pl-[18px]'>High Audio Quality</span>
					</li>
					<li className='list-style-tick'>
						<span className='pl-[18px]'>Download To Listen Offline</span>
					</li>
					<li className='list-style-tick'>
						<span className='pl-[18px]'>Visible Lyrics</span>
					</li>
					<li className='list-style-tick'>
						<span className='pl-[18px]'>Own Lyrics Creation</span>
					</li>
				</ul>
			</div>
			<div className='w-[284px] h-[269px] border-2 rounded-[10px] flex flex-col gap-4 pl-8 py-8'>
				<h4 className='text-[19px] text-left'>Melo&apos;s Free</h4>
				<ul className='flex flex-col justify-center gap-2 items-start h-4/5 text-[13.7px]'>
					<li className='list-style-cross'>
						<span className='pl-[18px]'>Ad Free Music Streaming</span>
					</li>
					<li className='list-style-cross'>
						<span className='pl-[18px]'>High Audio Quality</span>
					</li>
					<li className='list-style-cross'>
						<span className='pl-[18px]'>Download To Listen Offline</span>
					</li>
					<li className='list-style-cross'>
						<span className='pl-[18px]'>Visible Lyrics</span>
					</li>
					<li className='list-style-cross'>
						<span className='pl-[18px]'>Own Lyrics Creation</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PremiumFeatures;
