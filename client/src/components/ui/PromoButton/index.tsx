import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const PromoButton: FC = () => {
	const { push } = useRouter()
	return (
		<button
			className="bg-primaryRed rounded-[12px] text-white"
			onClick={(e) => {
				e.preventDefault()
				push('/')
			}}
		>
			Подробнее об обучении <AiOutlineRight />
		</button>
	)
}

export default PromoButton
