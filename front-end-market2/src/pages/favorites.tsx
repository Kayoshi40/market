import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta'

const FavoritesPage: NextPageAuth = () => {
	const { user } = useAuth()
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

export default FavoritesPage
