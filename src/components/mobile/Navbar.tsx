import { useState } from "react";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const sections = ["about", "tracks", "schedule", "photos", "faq"];

  return (
    <nav className="flex items-center justify-between px-4 py-6 text-xl">
      <div>
        <a href="/">
          <img src="images/Main/Logo.svg" className="w-12" />
        </a>
      </div>
      <div className="relative">
        <div className="flex">
          <button
            onClick={() => {
              setNavOpen((o) => !o);
            }}
          >
            <svg
              className={`${
                navOpen ? "rotate-90" : "rotate-0"
              } w-7 duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={`${
            navOpen ? "visible opacity-1" : "invisible opacity-0"
          } z-[9999] duration-200 absolute right-0 top-9 bg-white py-2 rounded-lg shadow-md overflow-hidden min-w-40`}
        >
          <ul>
            {sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#${section}`}
                  className="px-4 py-1 hover:bg-gray-100 block"
                >
                  {section}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://plume.hackmit.org"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1 hover:bg-gray-100 block"
              >
                Apply
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
