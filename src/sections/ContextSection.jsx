import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactModels/ContactExperience";
import emailjs from "@emailjs/browser";
const ContextSection = () => {
    const formRef = useRef(null);
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormdata({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //handle logic send email
        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            //reset form data after submit
            setFormdata({ name: "", email: "", message: "" });
        } catch (error) {
            console.log("EmailJs Error", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="section-padding flex-center">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in touch with me"
                    sub="Contact Information"
                />

                <div className="mt-16 grid-12-cols">
                    {/* contact form -left side */}
                    <div className="xl:col-span-5 ">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                                ref={formRef}
                            >
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Messages</label>
                                    <textarea
                                        onChange={handleChange}
                                        type="text"
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        placeholder="Your Messages"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading
                                                ? "Sending..."
                                                : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img
                                                src="/images/arrow-down.svg"
                                                alt="arrow"
                                            />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* 3d experience */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContextSection;
