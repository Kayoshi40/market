import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/auth-provider/auth-page.types'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from '../app/layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function MyApp({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
						<Layout>
							<head>
								<link rel='icon' href='/favicon.iso' />
							</head>
							<Component {...pageProps} />
						</Layout>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
