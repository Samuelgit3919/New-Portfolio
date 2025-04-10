import { motion } from "framer-motion"; // For animations
import { FaGithub } from "react-icons/fa"; // For GitHub icon
import { VscLiveShare } from "react-icons/vsc"; // For live demo icon
import { Link, Links } from "react-router";

function Projects() {
    const projects = [
        {
            title: "Evaluate",
            description:
                "A dynamic web application designed to streamline project evaluation processes. Built with React and Tailwind CSS, this tool allows users to track progress, manage tasks, and visualize data efficiently.",
            image: "project1.jpg",
            codeLink: "https://github.com/Samuelgit3919/evaluate", // Replace with actual link
            demoLink: "https://evaluate-demo.netlify.app", // Replace with actual link
        },
        {
            title: "GPT-3 Showcase",
            description:
                "A showcase website demonstrating the capabilities of GPT-3, a state-of-the-art language model by OpenAI. This project features interactive text generation and is built using React, Node.js, and the OpenAI API.",
            image: "project2.jpg",
            codeLink: "https://github.com/Samuelgit3919/gpt3-showcase", // Replace with actual link
            demoLink: "https://gpt3-showcase-demo.netlify.app", // Replace with actual link
        },
        {
            title: "Restaurant Platform",
            description:
                "An engaging online restaurant platform featuring a mobile-friendly menu, financial insights, and virtual dining experiences. Built with Next.js and MongoDB, it ensures seamless performance across all devices.",
            image: "project3.jpg",
            codeLink: "https://github.com/Samuelgit3919/restaurant-platform", // Replace with actual link
            demoLink: "https://restaurant-platform-demo.netlify.app", // Replace with actual link
        },
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
                                    <div className="h-64 rounded-lg bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg transform group-hover:scale-105 transition-transform duration-300"></div>
                                    {/* Overlay for hover effect */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-opacity duration-300 flex items-center justify-center">
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