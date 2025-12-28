import React, { useState, useEffect } from "react";
import {
    FaExternalLinkAlt,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

import jsImg from "../../assets/jsimg.png";
import Problemsolving from "../../assets/PROBLEM SOLVING.png";
import smit from "../../assets/SMIT.png";
import htmlcssjavascript from "../../assets/html,css,javascript.png";

const CertificatesSection = () => {
    const certificates = [
        {
            title: "Introduction to HTML, CSS, & JavaScript",
            issuer: "Coursera",
            date: "2025",
            image: htmlcssjavascript,
            link: "https://www.coursera.org/account/accomplishments/verify/D7KC18ZLMZ6E",
        },
        {
            title: "JavaScript",
            issuer: "HackerRank",
            date: "2025",
            image: jsImg,
            link: "https://www.hackerrank.com/certificates/iframe/a58aab1d7684",
        },
        {
            title: "Problem Solving",
            issuer: "HackerRank",
            date: "2025",
            image: Problemsolving,
            link: "https://www.hackerrank.com/certificates/iframe/994f183722ce",
        },
        {
            title: "Certificate of Participation",
            issuer: "S.M.I.T (Saylani Mass I.T Training)",
            date: "2025",
            image: smit,
            link: "https://drive.google.com/file/d/1oQVwli6OSIm-DkY3_k4zk6Bi4rVHWBsk/view",
        },
    ];

    const duplicated = [...certificates];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const [cardWidth, setCardWidth] = useState(320);
    const [isAnimating, setIsAnimating] = useState(true);

    const totalItems = certificates.length;
    const maxIndex = Math.max(0, certificates.length - itemsPerView);

    /* ---------- RESPONSIVE ---------- */
    useEffect(() => {
        const resize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
                setCardWidth(280);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
                setCardWidth(300);
            } else {
                setItemsPerView(3);
                setCardWidth(320);
            }
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    /* ---------- INFINITE LOOP ---------- */
    // useEffect(() => {
    //     if (currentIndex === totalItems) {
    //         setTimeout(() => {
    //             setIsAnimating(false);
    //             setCurrentIndex(0);
    //         }, 300);
    //     }

    //     if (currentIndex < 0) {
    //         setTimeout(() => {
    //             setIsAnimating(false);
    //             setCurrentIndex(totalItems - 1);
    //         }, 300);
    //     }
    // }, [currentIndex]);

    // useEffect(() => {
    //     if (!isAnimating) {
    //         requestAnimationFrame(() => setIsAnimating(true));
    //     }
    // }, [isAnimating]);

    // /* ---------- AUTOPLAY ---------- */
    // useEffect(() => {
    //     const auto = setInterval(() => {
    //         setCurrentIndex((prev) => prev + 1);
    //     }, 3500);
    //     return () => clearInterval(auto);
    // }, []);

    return (
        <>
            <Navbar />

            <section id="certificates" className="py-16 min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-3">
                            MY CERTIFICATES
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Certifications that showcase my skills and
                            continuous learning journey.
                        </p>
                    </div>

                    <div className="relative overflow-hidden px-12">
                        {/* LEFT */}
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                        >
                            <FaChevronLeft />
                        </button>

                        {/* SLIDER */}
                        <motion.div
                            className="flex space-x-6"
                            animate={{ x: -currentIndex * cardWidth }}
                            transition={
                                isAnimating
                                    ? {
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 30,
                                      }
                                    : { duration: 0 }
                            }
                        >
                            {duplicated.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="shrink-0 w-80 bg-gray-800/70 rounded-lg shadow-lg overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    <div className="p-5">
                                        <h3 className="text-lg font-bold">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-sm text-gray-400 mb-3">
                                            {cert.date}
                                        </p>

                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center text-blue-400 hover:text-blue-300"
                                        >
                                            View Certificate
                                            <FaExternalLinkAlt className="ml-2" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* RIGHT */}
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CertificatesSection;
