// Component 
import Button from 'components/Button'

// Asset 
import styles from './pagination.module.scss'

type IPaginationProps = {
	currentPage: number
	hasPrevPage: boolean
	hasNextPage: boolean
	className?: string
	onPageChange: (page: number) => void
}

const Pagination = ({ currentPage, hasPrevPage, hasNextPage, className, onPageChange }: IPaginationProps) => {
	let classNames = `${styles.container}`

	if (className) classNames += ` ${className}`

	return (
		<div className={classNames}>
			<Button
				onClick={() => hasPrevPage && onPageChange(Number(currentPage) - 1)}
				disabled={!hasPrevPage}
			>
				Previous Page
			</Button>
			<Button
				onClick={() => hasNextPage && onPageChange(Number(currentPage) + 1)}
				disabled={!hasNextPage}
			>
				Next Page
			</Button>
		</div>
	)
}

export default Pagination
