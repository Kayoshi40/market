import { useAuth } from '@/hooks/useAuth'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { OrderService } from '@/services/order.service'
import Heading from '@/ui/Heading'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta'
import { convertPrice } from '@/utils/convertPrice'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{ select: ({ data }) => data }
	)

	const { user } = useAuth()

	const { replace } = useRouter()

	useEffect(() => {
		if (!user) replace('/')
	}, [user])

	return (
		<Meta title='MyOrders'>
			<Layout>
				<Heading>My orders!</Heading>
				<section>
					{orders?.length ? (
						orders.map(order => (
							<div
								key={order.id}
								className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'
							>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>
									{new Date(order.createdAt).toLocaleDateString('ru-RU')}
								</span>
								<span>{convertPrice(order.price)}</span>
							</div>
						))
					) : (
						<div>Orders not found</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}



export default MyOrdersPage
