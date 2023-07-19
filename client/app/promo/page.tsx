import { Promo } from 'types/promo.type'

import Promos from '@/components/screens/Promos'

import { getPromosApiUrl } from '@/config/api.config'

import Custom404 from '../not-found'

const getPromos = async () => {
	let res = await fetch(getPromosApiUrl(''), { next: { revalidate: 360 } })
	if (!res.ok) throw new Error('Ошибка при загрузке акций')
	return res.json()
}

const PromoPage = async () => {
	let promoData = await getPromos().then((data) => data as Promo[])
	return promoData ? <Promos promos={promoData} /> : <Custom404 />
}

export default PromoPage
