import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'
import { TypePaginationProducts } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import Heading from '../Heading'
import Loader from '../Loader'
import Button from '../button/Button'
import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const extraPage = (length: number) => {
		let page
		if (length % 8 > 0) {
			page = 1
		} else {
			page = 0
		}
		return page
	}

	const perPage = 8

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() => ProductService.getAll({ page, perPage: perPage, sort: sortType }),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

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
					<div className='text-center mt-16'>
						{Array.from({
							length: response.length / perPage + extraPage(response.length)
						}).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									size='sm'
									variant={page == pageNumber ? 'dark' : 'light'}
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
