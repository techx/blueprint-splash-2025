import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebook, url: "https://www.facebook.com/HackMIT/" },
    { icon: FaXTwitter, url: "https://x.com/HackMIT" },
    { icon: FaInstagram, url: "https://www.instagram.com/hackmit/" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@officialhackmit" },
    { icon: FaEnvelope, url: "mailto:team@hackmit.org" },
  ];

  return (
    <footer className="flex justify-between items-center p-4 px-8 bg-gray-100 w-full">
      <div className="text-xl text-magenta font-medium">
        Made with <FaHeart className="inline text-magenta mx-1 mb-1" /> by the{" "}
        <a
          target="_blank"
          href="https://medium.com/hackmit-stories"
          className="footer-link"
        >
          <span className="hover:opacity-80 transition-opacity">
            HackMIT team
          </span>
        </a>
      </div>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-magenta hover:opacity-80 transition-opacity"
          >
            <Icon className="w-8 h-8" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
