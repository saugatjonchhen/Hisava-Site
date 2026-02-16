import { motion as Motion } from 'framer-motion';
import { Heart, Code2, Shield, Sparkles } from 'lucide-react';
import profilePic from '../../assets/images/Profile - Saugat Jonchhen.jpg';

export default function Maker() {
    return (
        <section className="section bg-[var(--color-bg-surface)] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Visual Side */}
                    <Motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-[var(--color-text-muted)]/10 shadow-2xl aspect-square max-w-md mx-auto">
                            <img
                                src={profilePic}
                                alt="Saugat Jonchhen"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-secondary)]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                    </Motion.div>

                    {/* Content Side */}
                    <Motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium mb-6">
                            <Heart size={14} className="fill-current" />
                            <span>Built with Passion</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
                            Meet the <span className="text-[var(--color-primary)]">Maker</span>
                        </h2>

                        <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
                            Hi, I'm <span className="text-[var(--color-text-main)] font-semibold">Saugat Jonchhen</span>. I built Hisava because I wanted a personal finance tool that respects privacy, works offline, and feels premium without the complexity of traditional apps.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-main)] mb-1">Privacy First</h4>
                                    <p className="text-sm text-[var(--color-text-muted)]">Built to keep your data on your device, always.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[var(--color-tertiary)]/10 rounded-lg flex items-center justify-center text-[var(--color-tertiary)] shrink-0">
                                    <Code2 size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-main)] mb-1">Crafted Code</h4>
                                    <p className="text-sm text-[var(--color-text-muted)]">Meticulously developed for performance and simplicity.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center text-[var(--color-secondary)] shrink-0">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-main)] mb-1">User Focused</h4>
                                    <p className="text-sm text-[var(--color-text-muted)]">Designed for clarity and ease of use in daily life.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[var(--color-text-muted)]/10 flex flex-wrap gap-4">
                            <a
                                href="https://saugatjonchhen.com.np/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium hover:opacity-90 transition-all"
                            >
                                <Sparkles size={16} />
                                View Portfolio
                            </a>
                            <a
                                href="https://saugatjonchhen.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--color-text-muted)]/20 text-[var(--color-text-main)] text-sm font-medium hover:bg-[var(--color-bg-default)] transition-all"
                            >
                                Work in Progress
                            </a>
                        </div>

                        <div className="mt-8">
                            <p className="text-[var(--color-text-muted)] italic">
                                "Hisava isn't just an app; it's my personal contribution to helping people gain financial clarity without compromising their digital privacy."
                            </p>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
}
