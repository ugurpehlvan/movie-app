// Library 
import { ReactNode } from 'react'

// Component 
import ReduxProvider from './ReduxProvider'
import ToastProvider from './ToastProvider'

type IRootProviderProps = {
	children: ReactNode
}

const RootProvider = ({ children }: IRootProviderProps) => {
	return (
		<ReduxProvider>
			<ToastProvider>{children}</ToastProvider>
		</ReduxProvider>
	)
}

export default RootProvider
