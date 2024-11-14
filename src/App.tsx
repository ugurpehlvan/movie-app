// Library 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Component 
import ListPage from 'pages/ListPage';
import DetailPage from 'pages/DetailPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<ListPage />}
				/>
				<Route
					path='/:id'
					element={<DetailPage />}
				/>
			</Routes>
		</Router>
	)
}

export default App
