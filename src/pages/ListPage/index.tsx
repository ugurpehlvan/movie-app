// Library 
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Component 
import Filters from 'components/Filters'
import Typography from 'components/Typography'
import Pagination from 'components/Pagination'
import MovieGrid from 'components/MovieGrid'

// Store 
import { fetchMovies } from 'store/thunks/movieThunks'
import { resetMovieError } from 'store/slices/movieSlice'

// Type 
import { IFilterTypes } from 'types/filterTypes'
import type { AppDispatch, RootState } from 'store'

// Asset 
import styles from './listPage.module.scss'

const ListPage = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [searchParams] = useSearchParams()

	const { movies, isLoading, currentPage, totalResults, error } = useSelector((state: RootState) => state.movies)

	if (error) {
		toast.error(error)
		dispatch(resetMovieError())
	}

	const handleFetchMovies = (page: number) => {
		dispatch(
			fetchMovies({
				page: String(page),
				search: searchParams.get('search'),
				year: searchParams.get('year'),
				type: searchParams.get('type') as IFilterTypes,
			}),
		)
	}

	useEffect(() => {
		const values: any = {}

		if (searchParams.get('search')) values.search = searchParams.get('search')
		if (searchParams.get('year')) values.year = searchParams.get('year')
		if (searchParams.get('type')) values.type = searchParams.get('type')

		dispatch(fetchMovies(values))
	}, [searchParams.get('search'), searchParams.get('year'), searchParams.get('type')]); // eslint-disable-line

	return (
		<div className={styles.container}>
			<Filters />
			<MovieGrid movies={movies} />
			<Pagination
				currentPage={currentPage}
				onPageChange={handleFetchMovies}
				hasPrevPage={!isLoading && currentPage > 1}
				hasNextPage={!isLoading && Math.ceil(totalResults / 10) > currentPage}
				className={styles.pagination}
			/>
		</div>
	)
}

export default ListPage
