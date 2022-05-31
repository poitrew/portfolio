import './sass/main.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Divider from './components/Divider'
import { useSpring, useSpringRef, useChain, animated, config, } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
			<Parallax pages={4} style={{top: 0, left: 0}}>
				<ParallaxLayer
					offset={0}
					speed={0.5}>
					<AnimatedHero style={slideUp} />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={0.5}>
					<About />
				</ParallaxLayer>
				<ParallaxLayer
					offset={2}
					speed={0.5}>
					<Projects />
				</ParallaxLayer>
				<ParallaxLayer offset={3} speed={2} style={{background: '#006257'}}/>
				<ParallaxLayer
					offset={3}
					speed={0.5}>
					<Contact />
				</ParallaxLayer>
			</Parallax>
			
		</>
	)
}

export default App
