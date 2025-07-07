import "../../styles/Footer.css"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-block">
                <b className="copyright">© 2024 Francesco Lanza</b>
                <a target='_blank' href='https://github.com/fralnz/fralnz.github.io'>Source Code</a>
            </div>
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