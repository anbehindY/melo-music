'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NavItems from './NavItems';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Collapse } from 'react-collapse';

const Navigation = () => {
	const router = useRouter();
	const [navActive, setNavActive] = useState(false);
	const [dropDownActive, setDropDownActive] = useState(false);

	return (
		<nav className='flex items-center justify-between flex-wrap p-6 h-[99px] bg-[#0F0F0F66] z-0 lg:h-[125px] lg:px-16'>
			<div className='relative w-[100px] h-[40px] lg:w-[200px] lg:h-[77px] cursor-pointer'>
				<Image
					src='/Logo.svg'
					fill
					alt='Melo logo'
					style={{ objectFit: 'contain' }}
					onClick={() => router.push('/')}
				/>
			</div>
			<button
				className={`w-[36px] h-[36px] z-[9] bg-[#FF2150] rounded-lg flex flex-col gap-1 justify-center items-center duration-[0.4s] nav-line lg:hidden 
				${navActive ? 'active' : ''}`}
				type='button'
				onClick={() => {
					setNavActive(!navActive);
				}}
			>
				<div
					className={`w-[23px] h-[2.5px] bg-white rounded
					${navActive ? 'barActive' : ''}`}
				/>
			</button>
			<div
				className={`fixed top-0 ${
					navActive ? 'left-0' : 'left-[100%]'
				} duration-[0.4s] ease-in-out bg-black w-screen h-screen z-[8]`}
			>
				<ul className='flex flex-col gap-8 pt-40 px-4 justify-start items-center h-full'>
					<li
						className='text-[#FF2150] font-semibold text-xl cursor-pointer hover:text-white'
						onClick={() => {
							setNavActive(false);
							router.push('/#premiumSection');
						}}
					>
						Premium
					</li>
					<li
						onClick={() => {
							setNavActive(false);
							router.push('/support');
						}}
						className='hover:text-[#FF2150] text-xl font-semibold cursor-pointer border-b-2 pb-8'
					>
						Support
					</li>
					<li
						className='text-xl font-semibold cursor-pointer border-2 rounded-full px-6 py-2 text-[#FF2150] border-[#FF2150]
						 hover:bg-[#FF2150] hover:text-white hover:shadow-listen-btn'
						onClick={() => {
							router.push('https://melomm.com/register');
						}}
					>
						Register
					</li>
					<li
						className='hover:text-[#FF2150] text-xl font-semibold cursor-pointer'
						onClick={() => {
							router.push('https://melomm.com/login');
						}}
					>
						Sign In
					</li>
					<li
						className='text-lg cursor-pointer'
						onClick={() => {
							setDropDownActive(!dropDownActive);
						}}
					>
						<div className='flex flex-col gap-2 ml-2'>
							<div className='flex items-center gap-2 ml-2'>
								ENG {dropDownActive ? <BsChevronUp /> : <BsChevronDown />}
							</div>
							<Collapse isOpened={dropDownActive}>
								<ul className='bg-[#96969647] w-20 h-[88px] flex flex-col gap-4 justify-center items-start px-[10px] rounded-[4px]'>
									<li>ENG</li>
									<li>MYAN</li>
								</ul>
							</Collapse>
						</div>
					</li>
				</ul>
			</div>
			<NavItems />
		</nav>
	);
};

export default Navigation;
