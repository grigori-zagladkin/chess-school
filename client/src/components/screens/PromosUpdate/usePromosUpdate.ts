'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { message } from 'antd'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { UpdatePromo } from 'types/promo.type'

import { PromoService } from '@/services/Promo.service'

export const usePromosUpdate = (setValue: UseFormSetValue<UpdatePromo>) => {
	const { push } = useRouter()
	let path = usePathname().split('/')
	let promoId = Number(path[path.length - 1])
	const [messageApi, contextHolder] = message.useMessage()
	const { isLoading, data, refetch } = useQuery({
		queryKey: ['load promo by id', promoId],
		queryFn: () => PromoService.getPromoById(promoId),
		onSuccess: ({ data }) => {
			setValue('title', data['title'])
			setValue('isVisible', data['isVisible'])
			setValue('content', data['content'])
		},
		onError: (error) => {
			messageApi.open({
				type: 'error',
				content: 'Произошла ошибка при загрузке данных',
			})
			console.error(error)
		},
		// enabled: !!promoId,
	})
	const { mutateAsync: updatePromo } = useMutation({
		mutationKey: ['update promo by id', promoId],
		mutationFn: (data: UpdatePromo) => PromoService.updatePromo(promoId, data),
		onSuccess: () => {
			messageApi.open({
				type: 'error',
				content: 'Обновление данных прошло успешно',
			})
			refetch()
			push('/manage/promo')
		},
		onError: (error) => {
			messageApi.open({
				type: 'error',
				content: 'Произошла ошибка при обновлении данных',
			})
			console.error(error)
		},
	})
	const onSubmit: SubmitHandler<UpdatePromo> = async (data) => {
		await updatePromo(data)
	}
	return { contextHolder, isLoading, data, onSubmit }
}
