import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full py-2 px-2 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href='/' className='m-auto flex items-center gap-2'>
				<Image priority src='/images/logo.svg' alt='Market' width={50} height={37} className=' fill-current text-white '/>
				<div className=' text-white text-2xl'>Market</div>
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-2xl'>
					<AiOutlineHeart className='fill-primary' size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
