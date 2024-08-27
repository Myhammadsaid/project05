import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://fakestoreapi.com',
	prepareHeaders: headers => {
		const token: string | null = localStorage.getItem('x-auth-token')
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
		return headers
	},
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 })

const customBaseQuery: typeof baseQuery = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions)

	if (result.error) {
		const { status } = result.error
		if (status === 401 || status === 403) {
			console.error('Unauthorized access - Redirecting to login...')
		}
	}

	return result
}

export const api = createApi({
	reducerPath: 'myApi',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Product'],
	endpoints: () => ({}),
})
