import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from 'framer-motion';
import myImage2 from "../../assets/Humza2.png"

const About = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="py-16 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">ABOUT ME</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">Get to know me!</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a <span className="font-bold text-white">Full Stack Focused Web Developer</span> building and managing the Front-end and Back-end Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="font-bold text-white">Project</span> section.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I also like sharing content related to the stuff that I have learned over the years in <span className="font-bold text-white">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my{' '}
                <a
                  href="https://www.linkedin.com/in/syedhumzasalman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
                >
                  LinkedIn
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/syedhumzasalman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
                >
                  GitHub
                </a>{' '}
                where I post useful content related to Web Development and Programming.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/+923142294369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  CONTACT ME
                </a>
              </div>
            </div>

            {/* Right Side: Lottie Animation */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <motion.div
                  className="relative"
                  initial={{ y: -100, opacity: 0 }} // Starts above and invisible
                  whileInView={{ y: 0, opacity: 1 }} // Slides down and fades in when in view
                  transition={{ duration: 1, ease: 'easeOut' }} // Smooth animation
                  viewport={{ once: true }} // Animates only once on scroll
                >
                  {/* Profile Image Placeholder - Replace with your actual image */}
                  <img
                    src={myImage2}
                    alt="Syed Humza Salman"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-gray-900"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;