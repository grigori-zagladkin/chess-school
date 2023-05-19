import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Шахматная школа Прогресс',
	description:
		'Записаться на обучение шахматам для детей и взрослых в шахматной школе для начинающих. Записаться в детский шахматный лагерь и на шахматные спортивные сборы',
	keywords:
		'шахматная школа, секция шахмат, шахматы обучение, соревнования по шахматам, шахматы для начинающих, шахматы для детей, обучение шахматам, шахматный кружок для детей, шахматный кружок, обучение игры в шахматы для детей',
	metadataBase: new URL(`${process.env.APP_URL}`),
	openGraph: {
		title: 'Next.js',
		description: 'The React Framework for the Web',
		url: 'https://nextjs.org',
		siteName: 'Next.js',
		images: [
			{
				url: 'https://nextjs.org/og.png',
				width: 800,
				height: 600,
			},
			{
				url: 'https://nextjs.org/og-alt.png',
				width: 1800,
				height: 1600,
				alt: 'My custom alt',
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	verification: {
		google: 'google',
		yandex: 'yandex',
		yahoo: 'yahoo',
		other: {
			me: ['my-email', 'my-link'],
		},
	},
	category: 'chess',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<meta name="theme-color" content="#181B1E" />
				<meta property="og:locale" content="ru" />

				<meta name="msapplication-navbutton-color" content="#181B1E" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#181B1E" />
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
