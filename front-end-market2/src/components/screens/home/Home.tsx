import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypePaginationProducts } from '@/types/product.interface'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'

import Meta from '@/ui/meta'
import { FC } from 'react'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<CatalogPagination title='Freshed products' data={{products, length}} />
			</Layout>
		</Meta>
	)
}

export default Home
