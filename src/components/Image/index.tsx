import { CSSProperties, useState } from 'react'

import styles from './image.module.scss'

type IImageProps = {
	src: string
	alt: string
	mode?: 'contain' | 'cover'
	rounded?: boolean
	width?: number
	height?: number
	className?: string
	style?: CSSProperties
}

const Image = ({ src, alt, rounded, mode = 'cover', width, height, className, style }: IImageProps) => {
	let classNames = `${styles.image} ${mode === 'cover' ? styles.cover : styles.contain}`

	if (rounded) classNames += ` ${styles.rounded}`

	if (className) classNames += ` ${className}`

	const [isError, setIsError] = useState<boolean>(false)

	return (
		<img
			src={isError ? "" : src}
			alt={alt}
			style={{ width: `${width}px`, height: `${height}px`, ...style }}
			className={classNames}
			onError={() => setIsError(true)}
		/>
	)
}

export default Image
