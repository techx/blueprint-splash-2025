import React from "react";
import {
  FaFacebook,
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
    <footer className="flex justify-between items-center p-4 bg-gray-100 w-full">
      <div className="text-lg">Made with ♡ by the HackMIT team</div>
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition-colors" // Increased font size
          >
            <Icon className="w-8 h-8" /> {/* Increased icon size */}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
