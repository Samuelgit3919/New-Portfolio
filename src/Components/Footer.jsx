import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import { FaArrowUp } from "react-icons/fa"; // For the "Back to Top" icon

function Footer() {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Animation variants for social icons
    const iconVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.2 },
        }),
        hover: {
            scale: 1.2,
            color: "#8b5cf6", // Purple on hover
            transition: { duration: 0.3 },
        },
    };

    // Animation variant for the "Back to Top" button
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.1, transition: { duration: 0.3 } },
        tap: { scale: 0.9 },
    };

    return (
        <footer className="py-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright Text */}
                    <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
                        Copyright © {new Date().getFullYear()}. All rights reserved.
                    </h3>

                    {/* Social Media Links */}
                    <div className="flex space-x-6">
                        <motion.a
                            href="https://www.linkedin.com/in/sami3919/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={iconVariants}
                            whileHover="hover"
                            custom={0}
                            className="text-gray-300 text-3xl hover:text-purple-500 transition-colors duration-300"
                        >
                            <FaLinkedin width={30} height={30} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Samuelgit3919"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={iconVariants}
                            whileHover="hover"
                            custom={1}
                            className="text-gray-300 text-3xl hover:text-purple-500 transition-colors duration-300"
                        >
                            <FaSquareGithub width={30} height={30} />
                        </motion.a>
                    </div>
                </div>

                {/* Back to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaArrowUp size={20} />
                </motion.button>
            </div>
        </footer>
    );
}

export default Footer;