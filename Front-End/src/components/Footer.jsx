import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { asset } from "../assets/assets";
import { faFacebook, faGithub, faInstagram, faSquarePinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white bg-cover bg-center" style={{ backgroundImage: `url(${asset.footerbg})`, }}>
      <div className="container mx-auto pt-[90px] px-40 pb-[120px] py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-4">BOOK SHOP</h3>
          <p>1203 Town Center Drive, FL 33458, USA</p>
          <p>+0000 123 456 789</p>
          <p>info@example.com</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Help</h4>
          <ul>
            <li><a href="#" className="hover:underline">Search</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Information</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul>
            <li><a href="#" className="hover:underline">Search Terms</a></li>
            <li><a href="#" className="hover:underline">Advanced Search</a></li>
            <li><a href="#" className="hover:underline">Helps & FAQs</a></li>
            <li><a href="#" className="hover:underline">Store Location</a></li>
            <li><a href="#" className="hover:underline">Orders & Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Information</h4>
          <ul>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Refund & Returns</a></li>
            <li><a href="#" className="hover:underline">Deliveries</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-[250px]  flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-6">
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a href="#"><FontAwesomeIcon icon={faSquarePinterest} size="2x" /></a>
        </div>
        <div className=" md:mt-0 ">
          <ul className="flex space-x-6">
            <button>
              <img src="https://img.icons8.com/?size=48&id=62765&format=png" alt="icon1" />
            </button>
            <button>
              <img src="https://img.icons8.com/?size=48&id=13611&format=png" alt="icon2" />
            </button>
            <button>
              <img src="https://cdn-icons-png.flaticon.com/128/1087/1087117.png" alt="icon3" />
            </button>
          </ul>
        </div>
      </div>

      <div className="reserved pt-10 pb-4 flex items-center justify-center">
        <p>&copy; 2024 Bookly-theme. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

