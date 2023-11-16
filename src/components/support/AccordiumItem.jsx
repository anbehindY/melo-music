'use client';

import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { TbChevronRight, TbChevronDown } from 'react-icons/tb';

const AccordiumItem = ({ question, answer }) => {
	const [dropDownStatus, setDropDownStatus] = useState(false);

	return (
		<div
			className={`lg:w-4/5 w-[95%] box-border border-2 border-transparent items-start mx-auto bg-white flex flex-col justify-between lg:px-10 lg:py-10 px-6 py-6 font-[500] lg:text-[22px] text-lg rounded-xl
			${dropDownStatus && '!border-[#FF2150]'}`}
		>
			<div className='flex justify-between w-full items-center'>
				<p className='w-4/5'>{question}</p>
				<div
					className={`w-[50px] h-[50px] ${
						dropDownStatus && 'bg-gradient'
					} rounded-full shadow-right-arrow flex justify-center items-center text-[#FF2150] cursor-pointer`}
					onClick={() => setDropDownStatus(!dropDownStatus)}
				>
					{dropDownStatus ? (
						<TbChevronDown className='text-3xl text-white' />
					) : (
						<TbChevronRight className='text-3xl' />
					)}
				</div>
			</div>
			<div
				className={`overflow-hidden duration-500 ${
					dropDownStatus ? 'max-h-[400px]' : 'max-h-0'
				}`}
			>
				<p className='w-full text-[18px] font-[400] leading-[30px] mt-4'>
					{answer}
				</p>
			</div>
		</div>
	);
};

export default AccordiumItem;
