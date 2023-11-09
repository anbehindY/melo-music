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
		<div className='w-[262px] h-[281px] border-gradient flex flex-col gap-4 px-6 py-8'>
			<div className='flex justify-between'>
				<h4 className='font-[700] text-xl'>{paymentInfo.type}</h4>
				<p>
					<span className='gradient font-[700] text-[20px]'>{paymentInfo.price} </span>Ks
				</p>
			</div>
			<p className='font-[700] text-[15px] gradient'>
				{paymentInfo.description}
			</p>
			<p className='font-[400] text-sm'>Available Payments:</p>
			<div className='flex gap-6'>
				{paymentInfo.source.map((source) => {
					return (
						<Image
							src={`/${source}.svg`}
							key={source}
							width={source === 'mptLogo' ? 50 : 40}
							height={source === 'mptLogo' ? 50 : 40}
							alt={source}
						/>
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
