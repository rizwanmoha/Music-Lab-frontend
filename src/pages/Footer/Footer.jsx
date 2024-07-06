import './Footer.css';

const Footer = () => {
    return (
        <div className="body_replacement">
            <div>
                <footer className="footer">
                    <div className="container3">
                        <div className="row">
                            <div className="footer-col">
                                <h4>company</h4>
                                <ul>
                                    <li><a href="aboutus">about us</a></li>
                                    <li><a href="description">our services</a></li>
                                    <li><a href="privacy">privacy policy</a></li>
                                    <li><a href="freelessons">affiliate program</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>get help</h4>
                                <ul>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="privacy">Privacy Policy </a></li>
                                    <li><a href="/contactus">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Upcoming Services</h4>
                                <ul>
                                    <li><a href="#">Guitars</a></li>
                                    <li><a href="#">Basses</a></li>
                                    <li><a href="#">Merchandise</a></li>
                                    <li><a href="#">Stickers</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Connect Us </h4>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
