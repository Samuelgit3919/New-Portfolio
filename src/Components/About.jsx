import { motion } from "framer-motion";
import about from "../assets/about.jpeg"
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling to sections

function About() {
    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 },
    };

    return (
        <section id="about" className="py-20 px-4 md:mx-64 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <motion.div
                        className="md:w-1/2 mb-12 md:mb-0 flex justify-around"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <div className="relative group">
                            <div className="w-84 h-84 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                <img src={about} alt="Samuel Habtamu" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-300 rounded-full shadow-md"></div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="md:w-1/2 md:pl-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={textVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-start text-gray-800">
                            About Me
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                            Full Stack Developer ❤️
                        </h3>
                        <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                            Hi, I'm Samuel Habtamu, a passionate Full Stack Developer with a focus on creating clean, user-friendly UI/UX experiences.
                        </p>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            My tech stack includes React.js, Tailwind CSS, JavaScript, and more. I'm always eager to learn new tools and techniques to deliver the best solutions.
                        </p>

                        {/* Get in Touch Button */}
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80} // Adjust this if you have a fixed header
                        >
                            <motion.button
                                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Get in Touch
                            </motion.button>
                        </ScrollLink>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;