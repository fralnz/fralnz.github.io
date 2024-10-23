import {Outlet} from 'react-router-dom';
import Footer from "./components/Footer.tsx";
import NavBar from "./components/NavBar.tsx";

const Root = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root