import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import projectsData from '../../Components/ProjectData/ProjectData';

const ProjectsSection = () => {
    const scrollRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    // Scroll to specific position
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Check scroll position
    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check

            // Add wheel event for horizontal scroll
            const handleWheel = (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    scrollContainer.scrollLeft += e.deltaY;
                }
            };

            scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll);
                scrollContainer.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);

    return (
        <>
            <Navbar />
            <section className="py-16 bg-linear-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Title Section */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-white from-blue-400 via-purple-500 to-pink-500"
                        >
                            MY PROJECTS
                        </motion.h2>
                    </motion.div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative group">
                        {/* Left Arrow */}
                        <motion.button
                            onClick={() => scroll('left')}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-linear-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl transition-all ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronLeft className="text-2xl" />
                        </motion.button>

                        {/* Scrollable Projects */}
                        <motion.div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-4 cursor-grab active:cursor-grabbing"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                            drag="x"
                            dragConstraints={scrollRef}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
                        >
                            {projectsData.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="shrink-0 w-80 sm:w-96 group/card relative"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        delay: index * 0.05,
                                        type: 'spring',
                                        stiffness: 100
                                    }}
                                >
                                    <motion.div
                                        className="relative bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all h-full"
                                        whileHover={{
                                            y: -10,
                                            boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)'
                                        }}
                                        onClick={() => !isDragging && setSelectedProject(project)}
                                    >
                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <motion.div
                                                className="absolute top-4 right-4 z-10 bg-linear-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                                                initial={{ scale: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 + 0.3 }}
                                            >
                                                <FaStar /> Featured
                                            </motion.div>
                                        )}

                                        {/* Project Number */}
                                        {/* <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                                            #{String(index + 1).padStart(2, '0')}
                                        </div> */}

                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />

                                            {/* Quick Action Overlay */}
                                            <motion.div
                                                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover/card:opacity-100 transition-opacity"
                                                initial={false}
                                            >
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-black p-4 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg"
                                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaGithub className="text-2xl" />
                                                </motion.a>
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-black p-4 rounded-full hover:bg-green-500 hover:text-white transition-all shadow-lg"
                                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <FaExternalLinkAlt className="text-2xl" />
                                                </motion.a>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-3 group-hover/card:text-blue-400 transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.slice(0, 4).map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30 font-medium"
                                                        whileHover={{
                                                            scale: 1.1,
                                                            backgroundColor: 'rgba(59, 130, 246, 0.3)',
                                                            borderColor: 'rgba(59, 130, 246, 0.6)'
                                                        }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                                {project.tech.length > 4 && (
                                                    <span className="text-gray-500 text-xs px-2 py-1">
                                                        +{project.tech.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            {/* View Details Button */}
                                            <motion.button
                                                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                            >
                                                View Details
                                            </motion.button>
                                        </div>

                                        {/* Bottom Gradient */}
                                        <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Arrow */}
                        <motion.button
                            onClick={() => scroll('right')}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-linear-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl transition-all ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChevronRight className="text-2xl" />
                        </motion.button>

                        {/* Scroll Indicator */}
                        <div className="flex justify-center mt-6 gap-2">
                            {projectsData.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="w-2 h-2 rounded-full bg-gray-600"
                                    whileHover={{ scale: 1.5, backgroundColor: '#3b82f6' }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Project Modal */}
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                            >
                                <motion.div
                                    className="bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-500/30"
                                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Modal Image */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />

                                        {/* Close Button */}
                                        <motion.button
                                            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
                                            onClick={() => setSelectedProject(null)}
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            ✕
                                        </motion.button>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="p-8">
                                        <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                            {selectedProject.description}
                                        </p>

                                        {/* Full Tech Stack */}
                                        <div className="mb-8">
                                            <h4 className="text-xl font-semibold mb-3 text-gray-200">Technologies Used:</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedProject.tech.map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30 font-medium"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.3)' }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <motion.a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
                                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaGithub className="text-2xl" /> View Source Code
                                            </motion.a>
                                            <motion.a
                                                href={selectedProject.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
                                                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaExternalLinkAlt className="text-2xl" /> Live Demo
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hide Scrollbar CSS */}
                {/* <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style> */}
            </section>
        </>
    );
};

export default ProjectsSection;