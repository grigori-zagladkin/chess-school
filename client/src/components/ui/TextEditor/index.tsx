'use client'

import clsx from 'clsx'
import { ContentState, EditorProps, EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { FC, useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { FieldError } from 'react-hook-form'

import styles from './Editor.module.scss'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | undefined
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditorProps
	extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}

const TextEditor: FC<ITextEditorProps> = ({
	placeholder,
	onChange,
	value,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())

	const [isUpdated, setIsUpdated] = useState(false)

	useEffect(() => {
		if (!isUpdated) {
			const defaultValue = value ? value : '',
				blocksFromHtml = htmlToDraft(defaultValue),
				contentState = ContentState.createFromBlockArray(
					blocksFromHtml.contentBlocks,
					blocksFromHtml.entityMap
				),
				newEditorState = EditorState.createWithContent(contentState)
			setEditorState(newEditorState)
		}
	}, [value, isUpdated])

	const onEditorStateChange = (editorState: EditorState) => {
		setIsUpdated(true)
		setEditorState(editorState)
		return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
	}

	return (
		<div className={clsx(styles.common, styles.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>

				<div className={styles.wrapper}>
					<Editor
						toolbarClassName={styles.toolbar}
						editorClassName={styles.editor}
						editorState={editorState}
						onEditorStateChange={onEditorStateChange}
						spellCheck
						toolbar={{
							options: ['inline', 'blockType', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},
							blockType: {
								inDropdown: false,
								options: [],
							},
							list: {
								inDrodown: false,
								options: ['unordered', 'ordered'],
							},
						}}
					/>
				</div>

				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default TextEditor
