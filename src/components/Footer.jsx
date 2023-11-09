import Image from 'next/image';
import { BsYoutube, BsInstagram, BsTiktok } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className='flex flex-col gap-8 items-center justify-center text-center pt-8 py-10 border-b-[1px] border-[#5B5858] w-[90%] mx-auto'>
				<ul className='text-[16px] flex flex-col gap-2 leading-5'>
					<li className='font-bold !leading-7'>Information</li>
					<li>FAQ</li>
					<li>Blog</li>
					<li>Support</li>
				</ul>
				<ul className='text-[16px] flex flex-col gap-2 leading-5'>
					<li className='font-bold !leading-7'>Melo</li>
					<li>About Us</li>
					<li>Career</li>
					<li>Contact Us</li>
				</ul>
				<ul className='text-[16px] flex flex-col gap-2 leading-5'>
					<li className='font-bold !leading-7'>Legal</li>
					<li>Terms and Conditions</li>
					<li>Privacy Policy</li>
					<li>Terms of Use</li>
				</ul>
				<ul className='text-left text-sm leading-4 flex flex-col gap-8 items-start w-[95%]'>
					<li className='flex gap-6 items-start leading-4'>
						<Image
							src={'/location.svg'}
							width={20}
							height={25}
							alt='Location icon'
						/>
						[A Division Of Music Industry Development Co.,Ltd]
						<br />
						No(737),Su Paung Yone Street,(37) Quarter, North Dagon
						Township, Yangon, Myanmar.
					</li>
					<li className='flex gap-6 items-start leading-4'>
						<Image
							src={'/phone.svg'}
							width={20}
							height={25}
							alt='Location icon'
						/>
						09-262277337, 09-262277447
					</li>
					<li className='flex gap-6 items-start leading-4'>
						<Image
							src={'/mail.svg'}
							width={20}
							height={25}
							alt='Location icon'
						/>
						support@melomm.com
					</li>
				</ul>
			</div>
      <div className='flex flex-col pt-8 pb-8 gap-6'>
        <ul className='flex justify-center items-center gap-6 text-xl'>
          <li><BsYoutube className='text-white'/></li>
          <li><FaFacebookF className='text-white'/></li>
          <li><BsInstagram className='text-white'/></li>
          <li><BsTiktok className='text-white'/></li>
        </ul>
        <div className='flex gap-8 items-center justify-center'>
          <Image src={'/Logo.svg'} alt='logo' width={93} height={35} />
         <p className='text-xs leading-[22px]'> @2023<span className='gradient'>MID</span>.All rights served.</p>
        </div>
      </div>
		</footer>
	);
};

export default Footer;
