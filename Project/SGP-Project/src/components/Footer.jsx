import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className="footer_wrapper">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 text-center text-md-start">
                {/* 
                <div className="footer-logo mb-3 mb-md-0">
                    <img src="./images/logo.png" alt="Logo" className="img-fluid" />
                </div> 
                */}
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                Alernative you can reach us on <br />
                <div className="footer_label">
                    <div>
                        <img style={{ height: '20px', width: '20px' }} src="./images/phone-call.png" alt="Phone" />
                        <span className="my-2">+918320902499</span>
                    </div>
                    <div>
                        <img style={{ height: '20px', width: '20px' }} src="./images/messages-1.png" alt="Email" />
                        <span className="my-2">krishilagrawal026@gmail.com</span>
                    </div>
                </div>
                Follow us on: <br />
                <ul className="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center social-icon mb-3 mb-md-0">
                    <li>
                        <a href="https://www.instagram.com/krishil98/" aria-label="Instagram"><FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Facebook">
                        <FaFacebook /></a>
                    </li>
                    <li>
                        <a href="#" aria-label="Twitter"><FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/krishil-agrawal-49aaa9283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
                        <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
                <div>
                    <p>Copyright ©️ 2024 All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    )
}