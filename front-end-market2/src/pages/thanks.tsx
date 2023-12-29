import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import Heading from '@/ui/Heading'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta'

const ThanksPage: NextPageAuth = () => {
	return (
		<Meta title='Thanks'>
			<Layout>
				<Heading>Thanks!</Heading>
			</Layout>
		</Meta>
	)
}

export default ThanksPage
