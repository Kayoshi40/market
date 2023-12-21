import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'
import { TypePaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/Productitem'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType],
		queryFn: () => {
			ProductService.getAll({ page, perPage: 4, sort: sortType })
		},
		initialData: data
	})

	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center'></div>
					<Button size='sm' variant='dark' onClick={() => setPage(page + 1)}>
						Load more
					</Button>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
