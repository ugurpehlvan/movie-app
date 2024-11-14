// Library 
import { AnimatePresence } from 'framer-motion'

// Component 
import MovieCard from 'components/molecules/MovieCard'

// Type 
import { IMovie } from 'types/movieType'

// Asset 
import styles from './movieGrid.module.scss'

type IMovieGridProps = {
	movies: IMovie[]
}

const MovieGrid = ({ movies }: IMovieGridProps) => {
	return (
		<div className={styles.container}>
			<AnimatePresence mode='wait'>
				{movies.map((movie, index) => (
					<MovieCard
						key={movie.imdbID}
						movie={movie}
						delay={index * 0.05}
					/>
				))}
			</AnimatePresence>
		</div>
	)
}

export default MovieGrid
