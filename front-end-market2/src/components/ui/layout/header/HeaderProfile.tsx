import { useProfile } from '@/hooks/useProfile'
import { FC } from 'react'
import Image from 'next/image'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatar && (
				<Image
					src={profile?.avatar}
					alt='profile'
					width={43}
					height={43}
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}

export default HeaderProfile