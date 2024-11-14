import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { IFilterForm } from 'types/formTypes'

import styles from './input.module.scss'

type IInputProps = {
	type?: HTMLInputTypeAttribute
	name: any
	register: UseFormRegister<IFilterForm>
	placeholder?: string
}

const Input = ({ type = 'text', register, name, placeholder }: IInputProps) => {
	return (
		<input
			type={type}
			{...register(name)}
			placeholder={placeholder}
			className={styles.input}
		/>
	)
}

export default Input
