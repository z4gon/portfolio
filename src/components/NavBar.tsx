import NavBarIcon from './NavBarIcon'

// import '../../styles/NavBar.module.sass'

const NavBar: React.FC<{}> = () => {
    return (
        <nav>
            <h1>z4gon</h1>
            <ul>
                <NavBarIcon
                    href="https://linkedin.com/in/gonzacn"
                    iconUrl="images/In-Blue-72.png"
                />
                <NavBarIcon
                    href="https://github.com/z4gon"
                    iconUrl="images/GitHub-Mark-64px.png"
                />
            </ul>
        </nav>
    )
}

export default NavBar
