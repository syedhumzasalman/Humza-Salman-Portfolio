import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import { useWeb3Forms } from '../../Components/UseWeb3Forms/UseWeb3Forms';
import Swal from 'sweetalert2';

const ContactSection = () => {

    const { submitForm, isSubmitting, submitStatus, setSubmitStatus } = useWeb3Forms(
        "63bb169e-0222-4daa-bd0d-9722197a5d51"
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            Swal.fire({
                icon: "warning",
                title: "Incomplete Form",
                text: "Please fill in all required fields before submitting.",
                confirmButtonColor: "#f97316",
            });
            return;
        }

        const result = await submitForm(formData);

        if (result.success) {
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Thank you! I'll get back to you soon.",
                confirmButtonColor: "#10b981",
            });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 10000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: "Something went wrong. Please try again later.",
                confirmButtonColor: "#ef4444",
            });
        }
    }; 

    return (
        <>
            <Navbar />
            <section
                id="contact"
                className="py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center"
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    {/* Title */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">GET IN TOUCH</h2>
                        <p className="text-lg sm:text-xl text-gray-300">
                            Have a project in mind or just want to say hi? Drop me a message!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                    whileHover={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                                >
                                    <FaPaperPlane className="mr-2" /> 
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info & Social Links */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                                <p className="text-gray-300 mb-6">
                                    I'm always open to discussing new opportunities, collaborations, or just chatting about tech. Feel free to reach out via the form or my social channels.
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-400">
                                        <strong>Email:</strong> syedhumzasalman@gmail.com
                                    </p>
                                    <p className="text-gray-400">
                                        <strong>Location:</strong> Karachi, Pakistan
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <motion.a
                                        href="https://www.linkedin.com/in/syedhumzasalman/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaLinkedin />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/syedhumzasalman"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaGithub />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.youtube.com/@HumzaCodeandCreates"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaYoutube />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.facebook.com/HumzaCodeandCreates/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaFacebook />
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/+923142294369"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaWhatsapp />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;