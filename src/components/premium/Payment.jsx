import Image from 'next/image';

const Payment = (
	{ paymentInfo } = {
		paymentInfo: {
			type: 'type',
			price: 'price',
			description: 'description',
			source: [],
		},
	}
) => {
	return (
		<div className='w-[262px] border-gradient flex flex-col gap-[10px] px-6 py-8'>
			<div className='flex justify-between'>
				<h4 className='font-[700] text-xl'>{paymentInfo.type}</h4>
				<p>
					<span className='gradient font-[700] text-[20px]'>
						{paymentInfo.price}{' '}
					</span>
					Ks
				</p>
			</div>
			<p className='font-[700] text-[15px] gradient lg:h-[70px]'>
				{paymentInfo.description}
			</p>
			<p className='font-[400] text-sm'>Available Payments:</p>
			<div className='flex gap-[4px]'>
				{paymentInfo.source.map((source) => {
					return (
						<div
							key={source}
							className='flex justify-center items-center duration-100 w-[60px] h-[60px] 
							ease-in-out p-2 rounded-md hover:border-[3px] hover:border-[#FF215076] relative'
						>
							<div className='relative w-[35px] h-[35px]'>
								<Image
									src={`/${source}.svg`}
									fill
									quality={100}
									style={{ objectFit: 'contain' }}
									alt={source}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{paymentInfo.source.includes('mptLogo') && (
				<span className='font-[400] text-[10px] ml-14'>(Auto Renewal)</span>
			)}
		</div>
	);
};

export default Payment;
