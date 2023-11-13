import { Routes, Route } from 'react-router-dom'
import { Navbar, History, Inputs, Profile } from './pages'





function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<History />} />
					<Route path='/input' element={<Inputs />} />
					<Route path='/profile' element={<Profile/>} />
				</Route>
			</Routes>
		</>
	)
}

export default App