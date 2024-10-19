import {Outlet, NavLink} from 'react-router-dom';
import "../styles/Header.css"

interface LinkStyleProps {
    isActive: boolean;
}

const linkStyle = ({ isActive }: LinkStyleProps): { color: string } => ({
    color: isActive ? 'red' : 'inherit',
});

const Root = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <NavLink style={linkStyle} to="/">
                        whoami
                    </NavLink>
                    <NavLink style={linkStyle} to="/projects">
                        projects
                    </NavLink>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Root