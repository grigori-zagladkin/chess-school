import { Base } from './base.type'

export type UpdatePromo = {
	title: string
	content: string
	isVisible: boolean
}

export type Promo = UpdatePromo & Base
