import { useMutation, useQuery } from '@tanstack/react-query'
import { Popconfirm, Space, message } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { MdClose, MdEditSquare } from 'react-icons/md'

import { useDebounced } from '@/hooks/useDebounced'

import { PromoService } from '@/services/Promo.service'

export const usePromosManage = () => {
	interface PromoDataType {
		key: string
		id: number
		title: string
		isVisible: boolean
		content: string
		createdAt: Date
		editUrl: string
	}
	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete promo'],
		mutationFn: (promoId: number) => PromoService.deletePromo(promoId),
		onError: (error) => {
			console.error(error)
			messageApi.open({
				type: 'error',
				content: 'Ошибка при удаллении акции',
			})
		},
		onSuccess: () => {
			refetch()
			messageApi.open({
				type: 'success',
				content: 'Акция успешно удалена',
			})
		},
	})
	const confirm = (id: number) => {
		deleteAsync(id)
	}
	const cancel = (e: React.MouseEvent<HTMLElement>) => {}
	const columns: ColumnsType<PromoDataType[]> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Название',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Виден',
			dataIndex: 'isVisible',
			key: 'isVisible',
		},
		{
			title: 'Контент',
			dataIndex: 'content',
			key: 'content',
		},
		{
			title: 'Дата создания',
			dataIndex: 'createdAt',
			key: 'createdAt',
		},
		{
			title: 'Действия',
			key: 'action',
			dataIndex: 'editUrl',
			render: (editUrl) => (
				<Space>
					<div
						onClick={() => {
							push(editUrl)
						}}
					>
						<MdEditSquare />
					</div>
					<Popconfirm
						title="Удалить категорию"
						description="Вы действительно хотите удалить категорию?"
						onConfirm={() => {
							let str = editUrl.split('/'),
								id = Number(str[str.length - 1])
							confirm(id)
						}}
						onCancel={cancel}
						okText="Да"
						cancelText="Нет"
					>
						{' '}
						<MdClose />
					</Popconfirm>
				</Space>
			),
		},
	]

	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounced(searchTerm, 500)
	const { push } = useRouter()
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const [messageApi, contextHolder] = message.useMessage()
	const { refetch, isLoading, data } = useQuery({
		queryKey: ['get all promos'],
		queryFn: () => PromoService.getAllPromos(debouncedSearch),
		// onSuccess: (data) => {
		//     console.log(data)
		// },
		select: ({ data }) =>
			data.map(
				(item): PromoDataType => ({
					id: item.id,
					title: item.title,
					isVisible: item.isVisible,
					createdAt: item.createdAt,
					content: item.content,
					key: 'key' + item.id,
					editUrl: `/manage/promo/${item.id}`,
				})
			),
		onError: (error) => {
			messageApi.open({
				type: 'error',
				content: 'Ошибка при загрузке акций',
			})
			console.error(error)
		},
	})
	console.log(data)
	const { mutateAsync: createAsync } = useMutation({
		mutationKey: ['create promo'],
		mutationFn: () => PromoService.createPromo(),
		onError: (error) => {
			console.error(error)
			messageApi.open({
				type: 'error',
				content: 'Ошибка при создании акции',
			})
		},
		onSuccess: ({ data }) => {
			messageApi.open({
				type: 'error',
				content: 'Успешное создание акции',
			})
			push(`/manage/promo/${data}`)
		},
	})
	return {
		handleSearch,
		searchTerm,
		contextHolder,
		columns,
		isLoading,
		data,
		createAsync,
	}
}
