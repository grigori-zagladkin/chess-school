'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'

import Heading from '@/components/ui/Heading'

import TableStat from './TableStat'

const DynamicLine = dynamic(() => import('./LineWithoutSSR'), {
	ssr: false,
})

const DynamicArea = dynamic(() => import('./AreaWithoutSSR'), {
	ssr: false,
})

const DynamicCombinePlot = dynamic(() => import('./CombinePlot'), {
	ssr: false,
})

const DynamicRadialBar = dynamic(() => import('./RadialBarWithoutSSR'), {
	ssr: false,
})

const Statistics: FC = () => {
	return (
		<section>
			<Heading size="lg">Статистика</Heading>
			<div className="grid grid-cols-2 gap-[50px] items-center mb-[100px]">
				<DynamicLine />
				<DynamicArea />
			</div>
			<div className="grid grid-cols-2 gap-[50px] items-center">
				<DynamicCombinePlot />
				<DynamicRadialBar />
			</div>
			<TableStat />
		</section>
	)
}

export default Statistics
