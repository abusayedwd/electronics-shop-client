 
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
 import "./Footer.css"

const Footer = () => {
        return (
          <div>
          <footer className="footer p-10 bg-base-200 text-base-content">
            <aside className="md:ml-6">
              <img className="w-10 rounded-full" src= "https://i.pinimg.com/736x/b5/ac/f3/b5acf3f7ce620af31da71fdb221020e9.jpg" alt="" />
              <p>
                India s first platform dedicated to <br /> simplifying partner
                search
              </p>
            </aside>
    
            <nav>
              <header className="footer-title">COMPANY</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">SOLUTIONS</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">RESOURCES</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <header className="footer-title">SUPPORT</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
              <header className="footer-title">LEGAL</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
          <hr className="w-[90%] mx-auto" />
    
          <footer className="footer items-center p-4 text-neutral-content">
            <aside className="items-center grid-flow-col md:ml-12">
              <p>
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
                Maharashtra
              </p>
            </aside>
            <nav className="grid-flow-col md:mr-12 gap-4 md:place-self-center md:justify-self-end">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
              <FaWhatsapp></FaWhatsapp>
            </nav>
          </footer>
          <div className="  bg-black p-10 text-white  text-xs h-8 flex items-center justify-center">
            <p>
              Registered trademark of India Private Limited © 2023 loerumipsum Inc.
              All Rights Reserved
            </p>
          </div>
        </div>
        );
};

export default Footer;