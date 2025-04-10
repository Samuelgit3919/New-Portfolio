import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion"; // For animations

function Contact() {
    // State for form inputs and submission status
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus("error");
            return;
        }

        emailjs
            .send(
                "service_r5o1ecb",
                "template_g62uksc",
                formData,
                "isFpKCf0uy94gEYYR"
            )
            .then(
                () => {
                    setFormStatus("success");
                    setFormData({ name: "", email: "", message: "" });
                },
                () => {
                    setFormStatus("error");
                }
            );
        setTimeout(() => {
            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Basic validation
    //     if (!formData.name || !formData.email || !formData.message) {
    //         setFormStatus("error");
    //         return;
    //     }
    //     // Simulate form submission (replace with actual API call)

    // };

    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: i * 0.2 },
        }),
        hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Contact Title */}
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={titleVariants}
                >
                    <p className="text-blue-600 text-lg font-semibold mb-2">
                        Contact
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Don't Be Shy! Hit Me Up! 👇
                    </h3>
                </motion.div>

                {/* Contact Icons */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                    {/* Location */}
                    <motion.div
                        className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={iconVariants}
                        whileHover="hover"
                        custom={0}
                    >
                        <span className="text-blue-600">
                            <FaMapLocationDot width={40} height={40} aria-label="Location icon" />
                        </span>
                        <div className="contact__info">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Location
                            </h3>
                            <p className="text-gray-600">
                                Adama, Oromia, Ethiopia
                            </p>

                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={iconVariants}
                        whileHover="hover"
                        custom={1}
                    >
                        <span className="text-blue-600">
                            <IoMdMail width={40} height={40} aria-label="Email icon" />
                        </span>
                        <div className="contact__info">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Email
                            </h3>
                            <a
                                href="mailto:saminew3919@gmail.com"
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            >
                                saminew3919@gmail.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={formVariants}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Send Me a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                rows="4"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    {/* Form Status Message */}
                    {formStatus === "success" && (
                        <p className="mt-4 text-green-600 text-center">
                            Message sent successfully! I'll get back to you soon.
                        </p>
                    )}
                    {formStatus === "error" && (
                        <p className="mt-4 text-red-600 text-center">
                            Please fill out all fields.
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;