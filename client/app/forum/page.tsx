import { NextPage } from 'next'

import { titleMerge } from '@/utils/meta'

const ForumPage: NextPage = () => {
	return (
		<div>
			<div>text</div>
			<div>132231</div>
		</div>
	)
}

export const generateMetadata = async ({}) => {
	return {
		title: titleMerge('Форум'),
	}
}

export default ForumPage
