import {NavLink} from "react-router-dom";
import {CSSProperties} from "react";
import "../../styles/NavBar.css"

const NavBar = () => {

    const linkStyle = ({isActive}: { isActive: boolean }): CSSProperties => ({
        color: isActive ? '#242424' : 'inherit',
        background: isActive ? 'rgb(255, 255, 255)' : 'inherit',
        borderRadius: isActive ? '2rem' : 'inherit',
    });

    return (
        <nav className="navbar-container">
            <ul className={"navbar"}>
                <li>
                    <NavLink style={linkStyle} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink style={linkStyle} to="/about">
                        About
                    </NavLink>
                </li>
                {/*<li>*/}
                {/*    <NavLink style={linkStyle} to="/projects">*/}
                {/*        Projects*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li>
                    <NavLink style={linkStyle} to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;