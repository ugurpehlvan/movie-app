// Library 
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

// Asset 
import 'react-toastify/dist/ReactToastify.css'

type IToastProviderProps = {
	children: ReactNode
}

const ToastProvider = ({ children }: IToastProviderProps) => {
	return (
		<>
			<ToastContainer />
			{children}
		</>
	)
}

export default ToastProvider
