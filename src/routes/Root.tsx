import {CSSProperties} from "react";
import {Outlet, NavLink} from 'react-router-dom';
import "../styles/Header.css"
import Footer from "./components/Footer.tsx";

const linkStyle = ({isActive}: { isActive: boolean }): CSSProperties => ({
    color: isActive ? '#242424' : 'inherit',
    background: isActive ? 'rgb(255, 255, 255)' : 'inherit',
    borderRadius: isActive ? '2rem' : 'inherit',
    padding: isActive ? '.8rem' : 'inherit',
});


const Root = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink style={linkStyle} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={linkStyle} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={linkStyle} to="/projects">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root