import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import projectsData from '../../Components/ProjectData/ProjectData';

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    // Get unique technologies for filter
    const allTech = [...new Set(projectsData.flatMap(p => p.tech))];

    // Filter projects
    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.tech.includes(filter));

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            y: -10,
            scale: 1.03,
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
            transition: {
                type: 'spring',
                stiffness: 300
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <Navbar />
            <section className="py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Title Section */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-5xl sm:text-6xl font-bold mb-4 bg-clip-text bg-linear-to-r text-white"
                            animate={{
                                backgroundPosition: ['0%', '100%', '0%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            MY PROJECTS
                        </motion.h2>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === 'all'
                                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            All Projects ({projectsData.length})
                        </motion.button>
                        {allTech.slice(0, 5).map((tech) => (
                            <motion.button
                                key={tech}
                                onClick={() => setFilter(tech)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === tech
                                        ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    layout
                                    className="group relative bg-linear-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <motion.div
                                            className="absolute top-3 right-3 z-10 bg-linear-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                        >
                                            <FaStar /> Featured
                                        </motion.div>
                                    )}

                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                                        {/* Hover Overlay with Quick Links */}
                                        <motion.div
                                            className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                            initial={false}
                                        >
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-black p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaGithub className="text-xl" />
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white text-black p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaExternalLinkAlt className="text-xl" />
                                            </motion.a>
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30"
                                                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-gray-500 text-xs px-2 py-1">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Gradient Line */}
                                    <motion.div
                                        className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Project Modal */}
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                                variants={overlayVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                onClick={() => setSelectedProject(null)}
                            >
                                <motion.div
                                    className="bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="p-8">
                                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {selectedProject.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30 font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <motion.a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaGithub /> View Code
                                            </motion.a>
                                            <motion.a
                                                href={selectedProject.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaExternalLinkAlt /> Live Demo
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="text-gray-300 mb-6 text-lg">
                            Want to see the complete collection? Check out my GitHub!
                        </p>
                        <motion.a
                            href="https://github.com/syedhumzasalman?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl transition-all"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaCode className="text-2xl" />
                            View All Projects on GitHub
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ProjectsSection;