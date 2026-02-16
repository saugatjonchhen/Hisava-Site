import { motion as Motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowRight, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import dashboardImg from '../../assets/images/Dashboard.jpeg';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pb-32">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-tertiary)]/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-secondary)]/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[var(--color-primary)]/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content Column */}
                    <Motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6 border border-[var(--color-primary)]/20"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Zap size={16} fill="currentColor" />
                            <span>Early Access Now Live</span>
                        </Motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-main)] mb-6 leading-tight">
                            Your Money, <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                                Your Clarity
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Experience the power of privacy-first finance tracking. Our Early Access program is now live—get started today with a direct APK download or by joining our tester group.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <Button to="/download" variant="primary" size="lg" className="w-full sm:w-auto shadow-[var(--color-primary)]/25">
                                Download Now
                                <Smartphone className="ml-2 w-5 h-5" />
                            </Button>
                            <Button href="#features" variant="ghost" size="lg" className="w-full sm:w-auto">
                                Explore Features
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-[var(--color-text-muted)]">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span>100% Private & Offline</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)]" />
                                <span>No Bank Connections</span>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Visual Column */}
                    <Motion.div
                        className="flex-1 relative w-full max-w-lg lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Abstract shape background for phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-3xl -z-10"></div>

                            {/* Phone mockup placeholder */}
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[var(--color-bg-default)] relative">
                                    {/* Internal Screen Content */}
                                    <img
                                        src={dashboardImg}
                                        alt="Hisava Dashboard"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    {/* Notch Overlay (since image might be under it) */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
}
