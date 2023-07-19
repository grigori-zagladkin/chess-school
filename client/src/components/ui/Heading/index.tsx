import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	size?: 'sm' | 'lg'
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	size,
	className,
}) => {
	return (
		<h1
			className={clsx(styles.heading, className, {
				[styles.lg]: size == 'lg',
				[styles.sm]: size == 'sm',
			})}
		>
			{children}
		</h1>
	)
}

export default Heading
