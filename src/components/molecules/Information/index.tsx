import Typography from 'components/Typography'

type IInformationProps = {
	info: string | undefined
	value: string | undefined
}

const Information = ({ info, value }: IInformationProps) => {
	return (
		<Typography>
			{info}:{' '}
			<Typography
				element='span'
				weight='bold'
			>
				{value ?? '-'}
			</Typography>
		</Typography>
	)
}

export default Information
