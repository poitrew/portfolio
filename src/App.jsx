import './sass/main.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Divider from './components/Divider'

function App() {
	return (
		<>
			<Nav />
			<Hero />
			{/* DIVIDER */}
				<Divider />
			{/* DIVIDER */}
			<About />
			<Projects />
			<Contact />
		</>
	)
}

export default App
