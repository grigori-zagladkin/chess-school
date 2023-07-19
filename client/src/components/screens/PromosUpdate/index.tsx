'use client'

import { Button, Checkbox, Form, Input, Spin } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { UpdatePromo } from 'types/promo.type'

import Heading from '@/components/ui/Heading'
import TextEditor from '@/components/ui/TextEditor'

import { usePromosUpdate } from './usePromosUpdate'

interface IPromoUpdate {
	// isOpen: boolean
}

const PromosUpdate: FC<IPromoUpdate> = ({}) => {
	const { control, setValue, handleSubmit } = useForm<UpdatePromo>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit, contextHolder } = usePromosUpdate(setValue)
	if (isLoading)
		return (
			<div className="w-full h-full flex items-center justify-center">
				<Spin size="large" />
			</div>
		)
	return (
		<section>
			{contextHolder}
			<Heading>Обновление сущности</Heading>
			<Form onSubmitCapture={handleSubmit(onSubmit)}>
				<Form.Item label="Название">
					<Controller
						name="title"
						control={control}
						render={({ field }) => <Input {...field} placeholder="Название" />}
					/>
				</Form.Item>
				<Form.Item>
					<Controller
						name="isVisible"
						control={control}
						render={({ field }) => (
							<Checkbox
								{...field}
								value={field.value}
								onChange={(e: CheckboxChangeEvent) => {
									setValue('isVisible', e.target.value)
								}}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item>
					<Controller
						name="content"
						control={control}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<TextEditor
								error={error}
								placeholder=""
								value={value}
								onChange={onChange}
							/>
						)}
					/>
				</Form.Item>
				<Form.Item>
					<Button>Обновить</Button>
				</Form.Item>
			</Form>
		</section>
	)
}

export default PromosUpdate
