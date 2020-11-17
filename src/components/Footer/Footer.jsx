import './Footer.sass';

import { vkSvg, instagramSvg, facebookSvg } from '../../assets/icons'

function Footer() {
    return (
        <footer>
            <div className="socials">
                <a href="http://vk.com/">
                    <img src={vkSvg} alt="vk icon" className="socials_img" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={instagramSvg} alt="instagram icon" className="socials_img" />
                </a>
                <a href="http://facebook.com/">
                    <img src={facebookSvg} alt="facebook icon" className="socials_img" />
                </a>
            </div>
            <div className="copyright_text">© 2020 Car Repair Inc. Сайт создан для учебных целей.</div>
        </footer>
    );
}

export default Footer;