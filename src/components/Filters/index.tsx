// Library 
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

// Component 
import Input from 'components/Input'
import Button from 'components/Button'
import SelectBox from 'components/SelectBox'

// Type 
import { RootState } from 'store'
import { IFilterForm } from 'types/formTypes'
import { IFilterTypes } from 'types/filterTypes'

// Asset 
import styles from './filters.module.scss'

const Filters = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const { isLoading } = useSelector((state: RootState) => state.movies)

	const { register, setValue, handleSubmit } = useForm<IFilterForm>({
		defaultValues: {
			search: searchParams.get('search') ?? 'Pokemon',
			year: searchParams.get('year') as string | undefined,
			type: (searchParams.get('type') as IFilterTypes) ?? 'movie',
		},
	})

	const handleSearch = (data: IFilterForm) => {
		const searchParams = new URLSearchParams()

		data.search && searchParams.append('search', data.search)
		data.type && searchParams.append('type', data.type)
		data.year && searchParams.append('year', data.year)

		navigate(`/?${searchParams.toString()}`)
	}

	return (
		<form
			onSubmit={handleSubmit(handleSearch)}
			className={styles.container}
		>
			<div className={styles.search}>
				<Input
					placeholder='Search movie...'
					register={register}
					name='search'
				/>
			</div>
			<div className={styles.year}>
				<Input
					placeholder='Movie Year...'
					type='number'
					register={register}
					name='year'
				/>
			</div>
			<div className={styles.type}>
				<SelectBox
					defaultValue='movie'
					options={['movie', 'series', 'episode']}
					onChange={value => setValue('type', value as IFilterTypes)}
				/>
			</div>
			<Button
				onClick={() => {}}
				disabled={isLoading}
			>
				Search
			</Button>
		</form>
	)
}

export default Filters
