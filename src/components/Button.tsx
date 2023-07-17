import React, { HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.sass'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	className?: string
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
	const { className, onClick, children } = props

	return (
		<button className={classNames(className, styles.button)} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
