import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import myImage from "../../assets/Humza.png"
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const nameArr = [
        `I'm SYED HUMZA SALMAN`,
        `I'm a Full Stack Developer`,
        `I build modern websites using JavaScript`,
        "Creating responsive & user-friendly UIs",
    ];

    useEffect(() => {
        const currentLine = nameArr[currentIndex];

        if (charIndex < currentLine.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentLine[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 50);

            return () => clearTimeout(typingTimeout);
        } else {
            // Wait 2 seconds before moving to next line
            const nextLineTimeout = setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setCurrentIndex((prev) => (prev + 1) % nameArr.length);
            }, 2000);

            return () => clearTimeout(nextLineTimeout);
        }
    }, [charIndex, currentIndex]);


    return (
        <section id='home' className="mt-16 lg:mt-0  min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Text Content */}
                <div className="text-center lg:text-left space-y-6 animate-fade-in">
                    <h1 className="text-1xl sm:text-3xl lg:text-3xl font-bold text-white leading-tight">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-md sm:text-xl lg:text-1xl text-gray-300 leading-relaxed">
                        A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
                    </p>

                    {/* Social Links - Visible on all screens, responsive */}
                    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        <a
                            href="https://www.linkedin.com/in/syedhumzasalman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/syedhumzasalman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-2xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.youtube.com/@HumzaCodeandCreates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-2xl"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.facebook.com/HumzaCodeandCreates/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300 text-2xl"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://wa.me/+923142294369"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-2xl"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                        <Link
                            to="/project"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image or Animation */}
                <div className="flex justify-center lg:justify-end animate-fade-in-delay">
                    <motion.div
                        className="relative"
                        initial={{ y: -100, opacity: 0 }} // Starts above and invisible
                        whileInView={{ y: 0, opacity: 1 }} // Slides down and fades in when in view
                        transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
                        viewport={{ once: true }} // Animates only once on scroll
                    >
                        {/* Profile Image Placeholder - Replace with your actual image */}
                        <img
                            src={myImage}
                            alt="Syed Humza Salman"
                            className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-blue-500"
                        />
                        {/* Cool Animation Overlay - Floating Elements */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full animate-bounce opacity-75"></div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;