import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling to sections
import { Link as RouterLink } from "react-router-dom"; // For regular links

function Header() {
    const [hamburger, setHamburger] = useState(false);

    const toggleMenu = () => setHamburger(!hamburger);
    const closeMenu = () => setHamburger(false);

    const navlinks = [
        { name: "Home", to: "home", spy: true, smooth: true, duration: 500 },
        { name: "About", to: "about", spy: true, smooth: true, duration: 500 },
        { name: "Projects", to: "projects", spy: true, smooth: true, duration: 500 },
        { name: "Contact", to: "contact", spy: true, smooth: true, duration: 500 },
        // {
        //     name: "Resume",
        //     to: "https://drive.google.com/file/d/1pLZ0xq8kX7r2f8b3m6f5z9R9a5j4rj0v/view?usp=sharing",
        //     isExternal: true
        // },
    ];

    return (
        <>
            <nav className="fixed w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <RouterLink
                        to="/"
                        className="text-2xl font-bold cursor-pointer"
                        onClick={closeMenu}
                    >
                        Sam.dev
                    </RouterLink>

                    <ul className="hidden md:flex space-x-8">
                        {navlinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    activeClass="text-black font-semibold"
                                    to={item.to}
                                    spy={item.spy}
                                    smooth={item.smooth}
                                    duration={item.duration}
                                    className="text-gray-700 hover:text-black font-medium cursor-pointer transition-colors"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>

                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <IoMdMenu
                            onClick={toggleMenu}
                            className="cursor-pointer"
                            size={30}
                        />
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${hamburger ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-4 flex justify-end">
                    <IoClose
                        onClick={closeMenu}
                        className="cursor-pointer"
                        size={30}
                    />
                </div>
                <ul className="px-4 space-y-6">
                    {navlinks.map((item) => (
                        <li key={item.name}>

                            <Link
                                activeClass="text-black font-semibold"
                                to={item.to}
                                spy={item.spy}
                                smooth={item.smooth}
                                duration={item.duration}
                                className="text-gray-700 hover:text-black font-medium block py-2 cursor-pointer transition-colors"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay for mobile menu */}
            {hamburger && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMenu}
                />
            )}
        </>
    );
}

export default Header;