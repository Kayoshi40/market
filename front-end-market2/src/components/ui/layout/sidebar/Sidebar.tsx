import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { CategoryService } from '@/services/category.service'
import Loader from '@/ui/Loader'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()

	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside
			className='bg-secondary flex flex-col justify-between'
			style={{ minHeight: 'calc(100vh - 60px)', height: '100%' }}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 b-6 ml-6'>
							Categories: ↓
						</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>
			{ user? !!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout() && window.location.reload()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			) : (<Link className='text-white flex items-center ml-10 mb-10' href='/auth'>Вход/Регистрация</Link>)}
		</aside>
	)
}

export default Sidebar
