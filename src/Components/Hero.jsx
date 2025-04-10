import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Fixed import: Use `Link` instead of `Links`
import self from "../assets/self.jpg"

function Hero() {
    // Group skills into pairs for consistent row display
    const skillsIcons = [
        {
            img: "https://skillicons.dev/icons?i=html,css",
            id: 1,
        },
        {
            img: "https://skillicons.dev/icons?i=js,react",
            id: 2,
        },
        {
            img: "https://skillicons.dev/icons?i=tailwind,bootstrap",
            id: 3,
        },
        {
            img: "https://skillicons.dev/icons?i=php,git",
            id: 4,
        },
        {
            img: "https://skillicons.dev/icons?i=github,figma",
            id: 5,
        },
        {
            img: "https://skillicons.dev/icons?i=postman,nodejs",
            id: 6,
        },
        {
            img: "https://skillicons.dev/icons?i=express,redux",
            id: 7,
        },
        {
            img: "https://skillicons.dev/icons?i=nextjs,mongodb",
            id: 8,
        },
    ];

    return (
        <section className="pt-32 pb-20 px-4 bg-gray-50 md:mx-64">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Full Stack Developer</h1>
                        <p className="text-xl mb-8 text-gray-600">
                            Hi, I'm <strong className="text-gray-800">Samuel</strong> Habtamu. A passionate Full stack
                            Developer. 📍
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                aria-label="linkedin"
                                rel="noreferrer"
                                target="_blank"
                                to="https://www.linkedin.com/in/sami3919/"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                            >
                                <FaLinkedin width={42} height={32} className="text-4xl" />
                            </Link>
                            <Link
                                aria-label="github"
                                rel="noreferrer"
                                target="_blank"
                                to="https://github.com/Samuelgit3919"
                                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaSquareGithub className="text-4xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-start">
                        <div className="relative w-74 h-74">
                            {/* Animated morphing border */}
                            <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-morph bg-transparent z-0"></div>

                            {/* Image container with morph animation */}
                            <div className="relative w-full h-full rounded-full overflow-hidden z-10 hero-img-container">
                                <img
                                    src={self}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-start">
                    <div className="skills">
                        <p className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</p>
                        <div className="logos">
                            <ul className="flex flex-wrap justify-start gap-6">
                                {skillsIcons.map((icon) => (
                                    <li
                                        key={icon.id}
                                        className="w-24 h-16 flex items-center transform transition-transform duration-300 hover:-translate-y-2"
                                    >
                                        <img
                                            src={icon.img}
                                            alt="skill-icon"
                                            className="w-full h-full object-contain"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 w-full mt-8"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;