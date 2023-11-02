import Image from 'next/image';
import { HiArrowDown } from "react-icons/hi";


export default function Home() {
	return (
		<>
			<nav className='flex items-center justify-between flex-wrap p-6 h-[99px] bg-[#0F0F0F66]'>
				<Image
					src='/Logo.svg'
					width={100}
					height={100}
					alt='Melo logo'
					style={{ width: 'auto', height: 'auto' }}
				/>
				<div className='w-[35px] h-[35px] bg-[#FF2150] rounded-lg flex flex-col gap-1 justify-center items-center'>
					<div className='w-[23px] h-[2.5px] bg-white rounded'></div>
					<div className='w-[23px] h-[2.5px] bg-white rounded'></div>
					<div className='w-[23px] h-[2.5px] bg-white rounded'></div>
				</div>
			</nav>

			<main className='flex h-[800px] flex-col items-center px-6 py-12'>
				<div>
					<Image
						src='/melo-icon.svg'
						width={168}
						height={168}
						alt='Melo icon'
					/>
				</div>
				<div>
					<div className='flex flex-col items-center gap-[12px]'>
						<span className='bg-clip-text text-transparent text-[37px]  font-bold bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]'>
							Melo <span className='text-white'>to your</span> Heart
						</span>{' '}
						<p className='font-[16px] leading-6 tracking-widest'>
							With Melo Music, you can download and enjoy wide varieties of
							songs from classic traditional songs to epic trending music
							genres.
						</p>
						<button className='bg-[#FF2150] shadow-listen-btn mt-4 w-[192] h-[59px] text-white font-semibold text-[18px] leading-6 px-10 py-3 rounded-[30px]'>
							Listen Now
						</button>
						<div className='flex flex-col items-center mt-8'>
							<a
								href='https://apps.apple.com/us/app/melo-music/id1478494134?itsct=apps_box_badge&amp;itscg=30200'
								style={{
									display: 'block',
									width: '160px',
									height: '60px',
								}}
							>
								<img
									src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1570579200'
									alt='Download on the App Store'
									style={{
										width: '160px',
										height: '50px',
									}}
								/>
							</a>
							<a
								href='https://play.google.com/store/apps/details?id=com.melomm.melomusic&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
								style={{
									display: 'block',
									width: '170px',
									height: '70px',
								}}
							>
								<img
									alt='Get it on Google Play'
									src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
									style={{
										width: '170px',
										height: '70px',
									}}
								/>
							</a>
						</div>
            <button className='flex justify-center items-center w-[40px] h-[40px] mt-4 rounded-full border-[3px] border-white hover:border-none hover:bg-gradient-to-r from-[#F857A6] via-pink-500 to-[#FF5858]'>
              <HiArrowDown className='p-1 text-white text-center text-3xl rounded-full hover:shadow-down-arrow' />
              </button>
					</div>
				</div>
			</main>
		</>
	);
}
