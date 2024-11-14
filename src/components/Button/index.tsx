import { MouseEventHandler, ReactNode } from 'react'

import styles from './button.module.scss'

type IButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>
	className?: string
	disabled?: boolean
	children: ReactNode
}

const Button = ({ onClick, className, disabled, children }: IButtonProps) => {
	let classNames = `${styles.button}`

	if (className) classNames += ` ${className}`

	if (disabled) classNames += ` ${styles.disabled}`

	return (
		<button
			onClick={onClick}
			className={classNames}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
