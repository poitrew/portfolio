import './sass/main.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import { useSpring, useSpringRef, useChain, animated, config, } from 'react-spring'

function App() {
	const heroRef = useSpringRef()
	const navRef = useSpringRef()
	const slideUp = useSpring({ bottom: 0, opacity: 1, from: { bottom: -1000, opacity: 0 }, config: config.slow, ref: heroRef })
	const slideDown = useSpring({ to: { top: 0 }, from: { top: -100 }, config: config.slow, ref: navRef })
	useChain([navRef, heroRef], [0, 0.5])
	const AnimatedNav = animated(Nav)
	const AnimatedHero = animated(Hero)

	return (
		<>
			<AnimatedNav style={slideDown }/>
			<AnimatedHero style={slideUp} />
			<About />
			<Projects />
			<Contact />
		</>
	)
}

export default App
