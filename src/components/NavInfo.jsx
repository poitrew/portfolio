import { useEffect } from 'react'

function NavInfo({ opacityAnim, setOpac, handleClick }) {

    useEffect(() => {
        setOpac()
    }, [])
    
    return (
        <div onClick={handleClick} className={opacityAnim ? 'nav-info opac' : 'nav-info'}>
            <h2>Dang Thanh Dat</h2>
            <div>
                <p>dtdat101101@gmail.com</p>
                <p>+84 901 208 303</p>
                <p>Ho Chi Minh, Viet Nam</p>
            </div>
            <div className='social'></div>
        </div>
    )
}

export default NavInfo