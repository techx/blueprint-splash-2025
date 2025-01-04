import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

const FooterMobile: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/HackMIT/" },
    { icon: FaXTwitter, url: "https://x.com/HackMIT" },
    { icon: FaInstagram, url: "https://www.instagram.com/hackmit/" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@officialhackmit" },
    { icon: FaEnvelope, url: "mailto:team@hackmit.org" },
  ];

  return (
    <footer className="flex flex-col items-center p-4 bg-gray-100 w-full space-y-4">
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-magenta hover:text-dark-brown transition-colors"
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>
      <div className="text-lg text-magenta font-medium text-center">
        Made with <FaHeart className="inline text-magenta mx-1 mb-1" /> by the
        <a
          target="_blank"
          href="https://medium.com/hackmit-stories"
          className="footer-link"
        >
          <span className="hover:text-dark-brown"> HackMIT team</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterMobile;
