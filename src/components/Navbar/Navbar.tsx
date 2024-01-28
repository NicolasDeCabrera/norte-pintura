import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.container_logo}>
                <img className={style.logo} src='./logo.png'></img>
            </div>
            <ul className={style.menu}>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Promos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
        </nav>
    )
}