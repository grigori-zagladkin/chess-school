import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import Table, { ColumnsType } from 'antd/es/table'
import { ChangeEvent, FC } from 'react'
import { MdSearch } from 'react-icons/md'

import Heading from '../Heading'

export interface IAdminTable {
	title: string
	withSearch?: boolean
	searchString?: string
	onChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void
	dataSource: any[]
	columns: ColumnsType<any>
	onCreate: () => void
}

const AdminTable: FC<IAdminTable> = ({
	withSearch,
	title,
	columns,
	dataSource,
	searchString,
	onChangeSearch,
	onCreate,
}) => {
	return (
		<section className="flex flex-col gap-[20px]">
			<Heading size="lg">{title}</Heading>
			<div className="flex gap-[50px]">
				{withSearch && (
					<div className="max-w-[450px]">
						<Input
							placeholder="Поиск"
							onChange={onChangeSearch}
							value={searchString}
							allowClear
							prefix={<MdSearch />}
						/>
					</div>
				)}
				<Button
					onClick={() => {
						onCreate()
					}}
					icon={<PlusOutlined />}
					className="flex items-center"
				>
					Создать
				</Button>
			</div>
			<Table columns={columns} dataSource={dataSource} />
		</section>
	)
}

export default AdminTable
