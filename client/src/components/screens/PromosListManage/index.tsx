'use client'

import { FC } from 'react'

import AdminTable from '@/components/ui/AdminTable'

import { usePromosManage } from './usePromosManage'

const PromosListManage: FC = () => {
	const {
		contextHolder,
		searchTerm,
		handleSearch,
		columns,
		createAsync,
		data,
	} = usePromosManage()
	console.log(data)
	return (
		<>
			{contextHolder}
			<AdminTable
				withSearch
				title="Акции школы"
				searchString={searchTerm}
				onCreate={createAsync}
				onChangeSearch={handleSearch}
				dataSource={data}
				columns={columns}
			/>
		</>
	)
}

export default PromosListManage
