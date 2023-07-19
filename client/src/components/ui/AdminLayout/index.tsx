'use client'

import {
	LineChartOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	QuestionCircleOutlined,
	RollbackOutlined,
	TableOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useState } from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'

import {
	getManageClassesUrl,
	getManageForumUrl,
	getManagePromosUrl,
	getManageUrl,
	getManageUsersUrl,
} from '@/config/app.config'

const { Header, Sider, Content } = Layout

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const { push } = useRouter()
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout className="min-h-screen h-fit">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <LineChartOutlined />,
							label: 'Статистика',
							onClick: () => push(getManageUrl('/')),
						},
						{
							key: '2',
							icon: <QuestionCircleOutlined />,
							label: 'Форум',
							onClick: () => push(getManageForumUrl(``)),
						},
						{
							key: '3',
							icon: <UserOutlined />,
							label: 'Пользователи',
							onClick: () => push(getManageUsersUrl(``)),
						},
						{
							key: '4',
							icon: <TableOutlined />,
							label: 'Занятия',
							onClick: () => push(getManageClassesUrl(``)),
						},
						{
							key: '5',
							icon: <BiMoneyWithdraw />,
							label: 'Акции',
							onClick: () => push(getManagePromosUrl(``)),
						},
						{
							key: '6',
							icon: <RollbackOutlined />,
							label: 'Главная',
							onClick: () => push('/'),
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
					className="w-full max-w-[1000px]"
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

export default AdminLayout
