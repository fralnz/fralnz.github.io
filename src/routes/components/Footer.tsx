import "../../styles/Footer.css"

const Footer = () => {
    return (
        <section className="footer">
            <b className="copyright">© 2024 Francesco Lanza</b>
            <div className="socials">
                <b>Socials</b>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/fralnz/">Linkedin</a>
                    </li>
                    <li>
                        <a href="https://github.com/fralnz">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/francesco.lnz/">Instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer;