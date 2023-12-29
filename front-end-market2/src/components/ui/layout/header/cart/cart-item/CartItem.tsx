import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import { FC } from 'react'
import CartAction from './cart-actions/CartAction'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className='mb-3 flex items-center'>
			<Image
			className='mb-1 mr-7 rounded-2xl'
				src={item.product.images[0]}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<div>
				<div>{item.product.name}</div>
				<div>{convertPrice(item.product.price)}</div>

				<CartAction item={item} />
			</div>
		</div>
	)
}

export default CartItem
