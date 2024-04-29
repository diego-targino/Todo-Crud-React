import { Provider } from 'react-redux'
import { storeState } from './redux'
import './App.css'

export default function App() {
	return (
		<main>
			<Provider store={storeState} >
				<div>
					<p> React ⚛️ + Vite ⚡ + Replit 🌀</p>
				</div>
			</Provider>
		</main>
	)
}