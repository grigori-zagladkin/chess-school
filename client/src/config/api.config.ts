export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`

console.log(API_URL)

export const getPromosApiUrl = (url: string) => `/promo${url}`
