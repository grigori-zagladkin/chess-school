'use client'

import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import TextEditor from '@/components/ui/TextEditor'

const Home: FC = () => {
	const { control } = useForm<{ text: string }>({
		mode: 'onChange',
	})
	return (
		<div>
			<Controller
				name="text"
				defaultValue=""
				control={control}
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextEditor
						placeholder="Description"
						onChange={onChange}
						error={error}
						value={value}
					/>
				)}
			/>
		</div>
	)
}

export default Home
