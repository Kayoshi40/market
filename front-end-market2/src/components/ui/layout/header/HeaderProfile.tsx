import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatar && (
				<Link href={'/my_orders'}>
					<Image
						src={profile?.avatar}
						alt='profile'
						width={43}
						height={43}
						className='rounded-full border-primary border border-solid animate-opacity'
					/>
				</Link>
			)}
		</div>
	)
}

export default HeaderProfile
