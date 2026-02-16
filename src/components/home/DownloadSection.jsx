import { motion as Motion } from 'framer-motion';
import { Smartphone, Apple, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

export default function DownloadSection() {
    return (
        <section id="download" className="py-20 lg:py-32 relative overflow-hidden bg-[var(--color-bg-default)]">
            {/* Background with gradient - Refined for light/dark mode compatibility */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 dark:from-[var(--color-primary)]/30 dark:to-[var(--color-secondary)]/30"></div>
                <div className="absolute inset-0 bg-radial-at-tr from-[var(--color-primary)]/20 via-transparent to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] dark:opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-main)] mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Start Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#10B981] dark:from-[var(--color-primary)] dark:to-[#34D399]">Financial Clarity</span>
                    </Motion.h2>

                    <Motion.p
                        className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Join thousands of users who are taking control of their money with Hisava. Completely free, privacy-first, and built for you.
                    </Motion.p>

                    <Motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button
                            to="/download"
                            variant="outline"
                            className="bg-[var(--color-bg-surface)] w-full sm:w-auto px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 transition-all"
                        >
                            <Smartphone className="w-6 h-6 text-[var(--color-secondary)]" />
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Coming Soon</span>
                                <span className="text-lg">Google Play</span>
                            </div>
                        </Button>

                        <Button
                            to="/download"
                            className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] w-full sm:w-auto px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 shadow-xl transition-all"
                        >
                            <div className="flex flex-col items-center leading-tight">
                                <span className="text-lg">Get Early Access</span>
                                <span className="text-[10px] uppercase tracking-widest font-normal opacity-80">Direct APK or Tester Program</span>
                            </div>
                        </Button>

                        <Button
                            to="/download"
                            variant="outline"
                            className="bg-[var(--color-bg-surface)] w-full sm:w-auto px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 transition-all opacity-70"
                            disabled
                        >
                            <Apple className="w-6 h-6 text-[var(--color-secondary)]" />
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">Coming Soon</span>
                                <span className="text-lg">App Store</span>
                            </div>
                        </Button>
                    </Motion.div>

                    <Motion.div
                        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-[var(--color-text-muted)]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                            <span>No Hidden Fees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                            <span>Offline First</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)]" />
                            <span>Privacy Focused</span>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
}
