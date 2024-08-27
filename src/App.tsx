import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Order from './components/Order'
import Home from './pages/home/Home'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/order' element={<Order />} />
			</Routes>
		</>
	)
}

export default App
