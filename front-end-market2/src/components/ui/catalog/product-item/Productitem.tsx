import { IProduct } from '@/types/product.interface'
import { convertPrice } from '@/utils/convertPrice'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'
import AddToCartButton from './AddToCartButton'
import ProductRating from './ProductRating'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='animate-scaleIn' style={{ maxWidth: 300 }}>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-10'>
					<DynamicFavoriteButton productId={product.id}></DynamicFavoriteButton>
					<AddToCartButton product={product} />
				</div>
				<Link
					style={{ display: 'inline-block' }}
					href={`/product/${product.slug}`}
				>
					<img
						className=' rounded-xl'
						style={{  height: 350, width: 300  }}
						width='250 px'
						height='250 px'
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className=' font-semibold mt-2' >{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs md-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
