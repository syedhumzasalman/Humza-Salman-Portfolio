import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { MdOutlineDesignServices, MdApi } from 'react-icons/md';
import Navbar from '../../Components/Navbar/Navbar';

const SkillsSection = () => {
    const frontendSkills = [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 85 },
        { name: 'React.js', icon: <FaReact className="text-blue-400" />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" />, level: 85 },
        { name: 'Responsive Design', icon: <MdOutlineDesignServices className="text-green-500" />, level: 95 },
    ];

    const backendSkills = [
        { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 75 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 70 },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-600" />, level: 75 },
        { name: 'RESTful APIs', icon: <MdApi className="text-blue-600" />, level: 80 },
    ];

    return (
        <>
            <Navbar />
            <section
                id="skills"
                className="py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">MY SKILLS</h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                            Here are the technologies and tools I specialize in, categorized by frontend and backend development.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Frontend Skills */}
                        <div className="space-y-6">
                            <h3 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">Frontend</h3>
                            <div className="space-y-4">
                                {frontendSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <div className="text-3xl">{skill.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold">{skill.name}</span>
                                                <span className="text-sm text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-linear-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="space-y-6">
                            <h3 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">Backend</h3>
                            <div className="space-y-4">
                                {backendSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <div className="text-3xl">{skill.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold">{skill.name}</span>
                                                <span className="text-sm text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-linear-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillsSection;