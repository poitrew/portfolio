export default function Nav() {
    return (
        <nav className='nav'>
            <a className='nav-logo' href="#">Henry Dang</a>
            <ul className="nav-social">
                <li className="nav-social-fb"><a href="https://www.facebook.com/thdatdg" target="_blank"><img src="./icon-fb.png" alt="" /></a></li>
                <li><a href="https://github.com/poitrew" target="_blank"><img src="./icon-github.png" alt="" /></a></li>
                <li className="nav-social-ins"><a href="https://www.instagram.com/dattdanggg" target="_blank"><img src="./icon-ins.png" alt="" /></a></li>
                <li className="nav-social-linkedin"><a href="https://www.linkedin.com/in/dgthanhdat" target="_blank"><img src="./icon-linkedin.png" alt="" /></a></li>
                <li className="nav-social-twitter"><a href="https://twitter.com/dtdat1011" target="_blank"><img src="./icon-twitter.png" alt="" /></a></li>
            </ul>
        </nav>
    )
}