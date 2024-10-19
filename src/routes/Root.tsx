import {CSSProperties} from "react";
import {Outlet, NavLink} from 'react-router-dom';
import "../styles/Header.css"
import Footer from "./components/Footer.tsx";

const linkStyle = ({isActive}: { isActive: boolean }): CSSProperties => ({
    color: isActive ? 'red' : 'inherit',
    background: isActive ? 'rgb(255, 255, 255)' : 'inherit',
    borderRadius: isActive ? '1rem' : 'inherit',
    padding: isActive ? '.5rem' : 'inherit',
});


const Root = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink style={linkStyle} to="/">
                            Who Am I?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={linkStyle} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={linkStyle} to="/projects">
                            Contact Me
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