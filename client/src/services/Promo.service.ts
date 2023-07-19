import { axiosClassic } from 'api'
import { Promo, UpdatePromo } from 'types/promo.type'

import { getPromosApiUrl } from '@/config/api.config'

export const PromoService = {
	async getAllPromos(searchTerm?: string) {
		return await axiosClassic.get<Promo[]>(getPromosApiUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getPromoById(promoId: number) {
		console.log(getPromosApiUrl(`/${promoId}`))
		let data = await axiosClassic.get<Promo>(getPromosApiUrl(`/${promoId}`))
		console.log(data)
		return data
	},
	async createPromo() {
		return await axiosClassic.post<number>(getPromosApiUrl(''))
	},
	async updatePromo(promoId: number, data: UpdatePromo) {
		return await axiosClassic.patch<Promo>(getPromosApiUrl(`/${promoId}`), data)
	},
	async deletePromo(promoId: number) {
		return await axiosClassic.delete(getPromosApiUrl(`/${promoId}`))
	},
}
