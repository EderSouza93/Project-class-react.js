// import { Link } from "react-router-dom";

// ASSETS 
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
// import BrazilIcon from '../../assets/brazil-icon.svg'
// import UsaIcon from '../../assets/use-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-logo-col">
                    <img src={Logo} />
                    <p className="grey-1-color">A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                    <div className="d-flex soscial-links">
                        <a href="https:www.google.com.br" target="_blank">
                            <img src={FacebookIcon}/>
                        </a>
                        <a href="https:www.google.com.br" target="_blank">
                            <img src={TwitterIcon}/>
                        </a>
                        <a href="https:www.google.com.br" target="_blank">
                            <img src={LinkedinIcon}/>
                        </a>
                        <a href="https:www.google.com.br" target="_blank">
                            <img src={FacebookIcon}/>
                        </a>
                        <a href="https:www.google.com.br" target="_blank">
                            <img src={InstagramIcon}/>
                        </a>
                    </div>

                    </div>

                    
                </div>
                
            </div>
        </footer>
    )
}

export default Footer