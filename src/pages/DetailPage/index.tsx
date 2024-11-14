// Library 
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'

// Component 
import Image from 'components/Image'
import Button from 'components/Button'
import Typography from 'components/Typography'
import MovieRatings from 'components/MovieRatings'
import MovieOverview from 'components/MovieOverview'
import MovieCastAndAwards from 'components/MovieCastAndAwards'

// Store 
import { resetMovieError } from 'store/slices/movieSlice'
import { fetchMovieDetail } from 'store/thunks/movieThunks'

// Utility 
import { moveFromBottom, moveFromRight } from 'utils/animations'

// Type 
import type { AppDispatch, RootState } from 'store'

// Asset 
import styles from './detailPage.module.scss'

const DetailPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const { detail, isLoading, isFetched, error } = useSelector((state: RootState) => state.movies)

	const [activeTab, setActiveTab] = useState<'overview' | 'castAndAwards' | 'ratings'>('overview')

	if (error) {
		toast.error(error)
		dispatch(resetMovieError())
		navigate('/')
	}

	useEffect(() => {
		dispatch(fetchMovieDetail({ id: id as string }))
	}, []) // eslint-disable-line

	if (isLoading) return <div>loading...</div>

	return (
		<div className={styles.container}>
			{isFetched && (
				<>
					<motion.div
						variants={moveFromRight}
						initial='initial'
						animate='animate'
						transition={{ duration: 0.5 }}
						className={styles.poster}
					>
						<Image
							src={detail?.Poster}
							alt='image'
							rounded
						/>
					</motion.div>
					<div className={styles.tabs}>
						<motion.div
							variants={moveFromBottom}
							initial='initial'
							animate='animate'
							transition={{ duration: 0.5 }}
							className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
						>
							<Typography
								onClick={() => setActiveTab('overview')}
								size='xl'
							>
								Overview
							</Typography>
						</motion.div>
						<motion.div
							variants={moveFromBottom}
							initial='initial'
							animate='animate'
							transition={{ duration: 0.5, delay: 0.2 }}
							className={`${styles.tab} ${activeTab === 'castAndAwards' ? styles.active : ''}`}
						>
							<Typography
								onClick={() => setActiveTab('castAndAwards')}
								size='xl'
							>
								Cast & Awards
							</Typography>
						</motion.div>
						<motion.div
							variants={moveFromBottom}
							initial='initial'
							animate='animate'
							transition={{ duration: 0.5, delay: 0.2 }}
							className={`${styles.tab} ${activeTab === 'ratings' ? styles.active : ''}`}
						>
							<Typography
								onClick={() => setActiveTab('ratings')}
								size='xl'
							>
								Ratings
							</Typography>
						</motion.div>
					</div>
					<div className={styles.content}>
						<AnimatePresence mode='wait'>
							{activeTab === 'overview' && (
								<MovieOverview
									key='overview'
									detail={detail}
								/>
							)}
							{activeTab === 'castAndAwards' && (
								<MovieCastAndAwards
									key='castAndAwards'
									detail={detail}
								/>
							)}
							{activeTab === 'ratings' && (
								<MovieRatings
									key='ratings'
									detail={detail}
								/>
							)}
						</AnimatePresence>
					</div>
					<Button
						onClick={() => navigate(-1)}
						className={styles.button}
					>
						Go Back to Movie List
					</Button>
				</>
			)}
		</div>
	)
}

export default DetailPage
