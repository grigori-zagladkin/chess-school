import { FC } from 'react'
import { Promo } from 'types/promo.type'

import Heading from '@/components/ui/Heading'
import PromoButton from '@/components/ui/PromoButton'

const PromoCard: FC<{ promo: Promo }> = ({ promo }) => (
	<li>
		<h3>{promo.title}</h3>
		<div>{promo.content}</div>
		<PromoButton />
	</li>
)

const Promos: FC<{ promos: Promo[] }> = ({ promos }) => {
	return (
		<section>
			<Heading size="lg">Скидки и акции</Heading>
			<ul>
				{promos.map((item, idx) => (
					<PromoCard key={idx} promo={item} />
				))}
			</ul>
		</section>
	)
}

export default Promos
