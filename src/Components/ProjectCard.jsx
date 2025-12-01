/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // For animations
import { FaGithub } from "react-icons/fa"; // For GitHub icon
import { VscLiveShare } from "react-icons/vsc"; // For live demo icon
import { Link } from "react-router";
import amazonCloneImage from "../assets/amazon-clone.png"; // Import your images here
import evangadiForumImage from "../assets/evangadiForum.png"; // Import your images here
import design from "../assets/closet.png"; // Import your images here
import portfolio from "../assets/portfolio.png"
import realState from "../assets/realState.png"
import food from "../assets/food-del.png"
import { i, title } from "framer-motion/client";


function Projects() {
    const projects = [
        {
            title: "Real State Website",
            description:
                "A comprehensive real estate platform enabling users to browse, search, and filter property listings. Built with React for the frontend and Firebase for backend services, it features user authentication, property management, and responsive design for seamless access across devices.",
            image: realState,
            codeLink: "https://github.com/Samuelgit3919/RealState-website.git", // Replace with actual link
            demoLink: "https://real-state-website-drab.vercel.app/", // Replace with actual link
        },
        {
            title: "Food Delivery App",
            description:
                "A dynamic food delivery application that allows users to explore local restaurants, view menus, and place orders for delivery or pickup. Built with React Native for cross-platform compatibility and Node.js for backend services, it includes real-time order tracking, user reviews, and secure payment processing.",
            image: food,
            codeLink: "/", // Replace with actual link
            demoLink: "https://food-delivery-web-app-gold.vercel.app/", // Replace with actual link
        },

        {
            title: "Closet Design measurement App",
            description:
                "A user-friendly web application that allows users to input their room dimensions and design preferences to generate customized closet designs. Built with React for the frontend and Node.js for the backend, it features an intuitive interface, real-time design previews, and options to save and share designs.",
            image: design,
            codeLink: "https://github.com/Samuelgit3919/demo-marketing-app", // Replace with actual link
            demoLink: "https://demo-marketing-app-5pte.vercel.app/", // Replace with actual link
        },

        {
            title: "Portfolio Website",
            description:
                "A sleek and modern portfolio website to showcase projects and skills. Built with React and Tailwind CSS, it features smooth animations, responsive design, and easy navigation to highlight professional achievements.",
            image: portfolio, // Replace with actual image link
            codeLink: "https://github.com/Samuelgit3919/upwork_job.git", // Replace with actual link
            demoLink: "https://galajm.com/", // Replace with actual link
        }
    ];

    // Animation variants for project cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: index * 0.2 },
        }),
    };

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800">
                    Projects
                </h2>
                <p className="text-center mb-12 text-gray-600 text-lg">
                    Each project is a unique piece of development ❤️
                </p>

                {/* Project Cards */}
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        custom={index}
                    >
                        <div
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Image Section */}
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <div className="relative group">
                                    <div className="h-64 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                        <div className="h-64 w-full bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                    {/* Overlay for hover effect */}
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            View Project
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="md:w-1/2 md:px-8 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    <Link
                                        to={project.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black transition-colors duration-300"
                                    >
                                        <span className="mr-2">Code</span>
                                        <FaGithub size={20} />
                                    </Link>
                                    <Link
                                        to={project.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-100 rounded-lg hover:bg-blue-200 text-blue-700 hover:text-blue-900 transition-colors duration-300"
                                    >
                                        <span className="mr-2">Live Demo</span>
                                        <VscLiveShare size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;