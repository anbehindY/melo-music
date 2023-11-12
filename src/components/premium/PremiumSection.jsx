'use client';

import React from 'react';
import PremiumFeatures from './PremiumFeatures';
import Image from 'next/image';
import Payment from './Payment';
import { PAYMENT_INFO } from '@/utils/data';
import { BsArrowRight } from 'react-icons/bs';

const PremiumSection = () => {
	const [hover, setHover] = React.useState(false);

	return (
		<section
			className='flex flex-col items-center justify-center w-full'
			id='premiumSection'
		>
			<h2 className='text-[36px] font-semibold text-center leading-[42px] gradient w-[300px] mx-auto my-6'>
				<span className='text-white'>Join</span> Melo&apos;s Premium
			</h2>
			<PremiumFeatures />
			<div className='flex flex-col items-center gap-10 w-full'>
				<h4 className='w-[250px] text-center text-[24px] font-[700]'>
					Available Payments for Premium
				</h4>
				<div className='flex flex-col items-center justify-center gap-8 pb-4'>
					<div className='flex justify-center items-center gap-8'>
						<Image src='/kbzPay.svg' width={50} height={50} alt='kbzPay' />
						<Image src='/mptLogo.svg' width={50} height={50} alt='mptLogo' />
						<Image src='/dollar.svg' width={50} height={50} alt='dollar' />
					</div>
					<div className='flex justify-center items-center gap-8'>
						<Image src='/applePay.svg' width={65} height={65} alt='applePay' />
						<Image src='/cbPay.svg' width={50} height={50} alt='cbPay' />
					</div>
				</div>
				<div className='flex flex-col gap-8 bg-transparent'>
					{PAYMENT_INFO.map((paymentInfo) => {
						return <Payment key={paymentInfo.type} paymentInfo={paymentInfo} />;
					})}
				</div>
				<div className='border-b-[1px] border-[#5B5858] pb-10 w-[90%] flex justify-center'>
				<button
						className='bg-[#FF2150] shadow-listen-btn mt-4 w-[192px] h-[59px] text-white font-semibold
          text-[18px] leading-6 duration-[0.5s] rounded-[30px] hover:bg-transparent hover:shadow-none hover:border-2 hover:border-[#FF5276] hover:text-[#FF5276]'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						Buy Now
						{hover && (
							<BsArrowRight className='inline-block ml-2 text-[#FF5276]' />
						)}
					</button>
				</div>
			</div>
		</section>
	);
};

export default PremiumSection;
