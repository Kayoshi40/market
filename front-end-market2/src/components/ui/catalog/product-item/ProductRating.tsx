import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		
		
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length 
		) 
	)



	return (
		<div className='mr-2'>
      
			<span className='mr-1 inline-flex items-center'>
				<Rating
					readonly
          className='pb-1'
					initialValue={Number.isNaN(rating) ? 0 : rating}
					SVGstyle={{ display: 'inline-block' }}
					size={20}
					allowFraction
					transition
				/>
				<span style={{ color: '#FFBC0D' }} className='text-sm ml-1 mb-0.5'> { Number.isNaN(rating) ? 0 : rating}</span>
			</span>

			<span className='text-xs pt-1'>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
