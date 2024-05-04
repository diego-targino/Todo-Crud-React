import { Provider } from 'react-redux'
import { storeState } from './redux'
import './App.css'
import { AppRouter } from './components/router/appRouter'

export default function App() {
	return (
		<main>
			<Provider store={storeState} >
				<AppRouter />
			</Provider>
		</main>
	)
}