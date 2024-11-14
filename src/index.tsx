import ReactDOM from 'react-dom/client'
import App from './App'
import RootProvider from 'providers';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RootProvider>
		<App />
	</RootProvider>,
)
