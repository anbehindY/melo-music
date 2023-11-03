import React from 'react'
import Image from 'next/image'

const Navigation = () => {
  return (
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
  )
}

export default Navigation
