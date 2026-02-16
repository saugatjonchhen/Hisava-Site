import { motion as Motion } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, Instagram, Send, MapPin, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { useState } from 'react';
import profilePic from '../assets/images/Profile - Saugat Jonchhen.jpg';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Support',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => {
                setIsSubmitting(false);
                setIsSent(true);
                setFormData({ name: '', email: '', subject: 'Support', message: '' });
                setTimeout(() => setIsSent(false), 5000);
            })
            .catch(error => {
                console.error("Form submission error:", error);
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-12 pb-20">
            <SEO title="Contact" description="Get in touch with the Hisava team. We'd love to hear your feedback, answer your questions, or discuss partnership ideas." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Motion.h1
                        className="text-4xl sm:text-5xl font-bold text-[var(--color-text-main)] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get in <span className="text-[var(--color-primary)]">Touch</span>
                    </Motion.h1>
                    <Motion.p
                        className="text-lg text-[var(--color-text-muted)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Have a question, feedback, or partnership idea? We'd love to hear from you.
                    </Motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <Motion.div
                        className="flex-1 lg:max-w-md space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-[var(--color-bg-surface)] p-8 rounded-3xl shadow-sm border border-[var(--color-text-muted)]/20">
                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/20 shadow-lg shrink-0">
                                    <img
                                        src={profilePic}
                                        alt="Saugat Jonchhen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Saugat Jonchhen</h3>
                                    <p className="text-[var(--color-text-muted)] text-sm font-medium">Developer & Maker</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="mailto:saugat.john09@gmail.com" className="flex items-center gap-4 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text-muted)]">Email Me</p>
                                        <p className="font-semibold text-[var(--color-text-main)]">saugat.john09@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                                    <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center text-[var(--color-secondary)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text-muted)]">Location</p>
                                        <p className="font-semibold">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-[var(--color-text-muted)]/20">
                                <h4 className="font-semibold text-[var(--color-text-main)] mb-4">Portfolios</h4>
                                <div className="space-y-4">
                                    <a href="https://saugatjonchhen.com.np/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/10 hover:border-[var(--color-primary)] transition-all group">
                                        <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]">Live Portfolio</span>
                                        <ExternalLink size={16} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]" />
                                    </a>
                                    <a href="https://saugatjonchhen.netlify.app/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/10 hover:border-[var(--color-primary)] transition-all group">
                                        <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]">Work in Progress</span>
                                        <ExternalLink size={16} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]" />
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-[var(--color-text-muted)]/20">
                                <h4 className="font-semibold text-[var(--color-text-main)] mb-4">Connect with Me</h4>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://github.com/saugatjonchhen" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[var(--color-bg-default)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-text-main)] hover:text-white transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/saugat-john09/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[var(--color-bg-default)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[#0077b5] hover:text-white transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="https://www.facebook.com/saugat.john09" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[var(--color-bg-default)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[#1877f2] hover:text-white transition-all">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/saugat.john09/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[var(--color-bg-default)] rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[#e4405f] hover:text-white transition-all">
                                        <Instagram size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Contact Form */}
                    <Motion.div
                        className="flex-1 bg-[var(--color-bg-surface)] p-8 sm:p-10 rounded-3xl shadow-xl border border-[var(--color-text-muted)]/20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            name="contact"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            {/* Netlify hidden field for React */}
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-muted)]">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text-main)] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-muted)]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text-main)] transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-[var(--color-text-muted)]">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text-main)] transition-all"
                                >
                                    <option>Support</option>
                                    <option>Feedback</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-muted)]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text-main)] transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full sm:w-auto min-w-[150px] justify-center"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>

                            {isSent && (
                                <Motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[var(--color-primary)] font-medium text-center"
                                >
                                    Message sent successfully!
                                </Motion.p>
                            )}
                        </form>
                    </Motion.div>
                </div>
            </div>
        </div>
    );
}
