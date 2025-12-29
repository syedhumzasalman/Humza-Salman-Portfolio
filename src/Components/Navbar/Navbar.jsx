import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaQrcode } from 'react-icons/fa';
import Swal from 'sweetalert2';
import qrcode from '../../assets/qr-code.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const showQuote = () => {
        Swal.fire({
            title: '',
            text: "You can view this on mobile as well",
            imageUrl: qrcode,
            imageWidth: 500,
            imageHeight: 350,
            imageAlt: 'Qari Quote Image',
            background: '#fefefe',
            color: '#1a1a1a',
            confirmButtonColor: '#3085d6'
        });
    };

    return (
        <nav className="fixed top-0 w-full bg-linear-to-r from-gray-900 via-gray-800 to-black shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand */}
                    <div className="shrink-0">
                        <Link
                            to="/"
                            className="text-white text-md lg:text-xl font-bold tracking-wide hover:text-blue-400 transition-colors duration-300"
                        >
                            &lt; SYED HUMZA SALMAN /&gt;
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            About me
                        </button>
                        <button
                            onClick={() => scrollToSection('skills')}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection('certificates')}
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Certificates
                        </button>
                        <Link
                            to="/project"
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Contact
                        </Link>
                        <button
                            onClick={showQuote}
                            className="text-white hover:text-blue-400 transition-colors duration-300 text-xl"
                        >
                            <FaQrcode />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none"
                        >
                            <FaBars className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800 bg-opacity-95 rounded-lg mt-2 py-4 px-4 space-y-4 shadow-lg">
                        <Link
                            to="/"
                            className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                            onClick={toggleMenu}
                        >
                            About me
                        </Link>
                        <Link
                            to="/skill"
                            className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                        <Link
                            to="/project"
                            className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/certificate"
                            className="block text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                            onClick={toggleMenu}
                        >
                            Certificates
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                            Contact
                        </Link>
                        {/* <button
                            onClick={() => {
                                showQuote();
                                toggleMenu();
                            }}
                            className="block text-white hover:text-blue-400 transition-colors duration-300 text-xl"
                        >
                            <FaQrcode />
                        </button> */}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;