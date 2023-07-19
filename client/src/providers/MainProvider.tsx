'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

import ErrorBoundary from './ErrorBoundary'

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		// <ErrorBoundary>
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
		// </ErrorBoundary>
	)
}

export default MainProvider
