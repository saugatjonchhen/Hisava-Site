import { motion as Motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { Smartphone, Apple, Download as DownloadIcon, Check, AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';
import { useState } from 'react';

export default function Download() {
    const [email, setEmail] = useState('');
    const [notified, setNotified] = useState(false);

    const handleNotify = (e) => {
        e.preventDefault();
        if (email) {
            setNotified(true);
            // In a real app, send to backend
        }
    };

    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-12 pb-20">
            <SEO title="Download" description="Download Hisava for Android to master your personal finances. Coming soon to iOS. Safe, private, and 100% offline." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Motion.h1
                        className="text-4xl sm:text-5xl font-bold text-[var(--color-text-main)] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Hisava</span> on your device
                    </Motion.h1>
                    <Motion.p
                        className="text-lg text-[var(--color-text-muted)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Available now for Android. iOS version is in active development.
                    </Motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Android Card */}
                    <Motion.div
                        className="bg-[var(--color-bg-surface)] rounded-3xl p-8 border border-[var(--color-text-muted)]/20 shadow-xl relative overflow-hidden group"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-default)] flex items-center justify-center text-[var(--color-secondary)] shadow-sm">
                                <Smartphone size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Android</h3>
                                <p className="text-[var(--color-text-muted)]">Google Play Store</p>
                            </div>
                        </div>

                        <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl p-4 mb-8">
                            <div className="flex gap-3">
                                <AlertCircle size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-[var(--color-primary)]">
                                    Hisava is coming soon to the Play Store. Stay tuned for the official release!
                                </p>
                            </div>
                        </div>

                        <Button
                            href="#"
                            className="w-full bg-[var(--color-bg-default)] text-[var(--color-text-muted)] border border-[var(--color-text-muted)]/20 justify-center py-4 text-lg cursor-not-allowed mb-6"
                            disabled
                        >
                            Coming Soon to Play Store
                        </Button>

                        <div className="pt-6 border-t border-[var(--color-text-muted)]/20">
                            <a
                                href="/hisava-latest.apk"
                                className="flex items-center justify-between cursor-pointer group/apk hover:opacity-80 transition-opacity"
                                download
                            >
                                <div>
                                    <span className="text-sm font-medium text-[var(--color-text-main)] group-hover/apk:text-[var(--color-secondary)] transition-colors">Direct APK Download</span>
                                    <p className="text-xs text-[var(--color-text-muted)] opacity-70">Available immediately for Android devices</p>
                                </div>
                                <DownloadIcon size={16} className="text-[var(--color-text-muted)] group-hover/apk:text-[var(--color-secondary)] transition-colors" />
                            </a>
                        </div>
                    </Motion.div>

                    {/* Early Access / Tester Section */}
                    <Motion.div
                        className="bg-[var(--color-bg-surface)] rounded-3xl p-8 border border-[var(--color-secondary)]/30 shadow-xl relative overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="absolute top-0 right-0 bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Early Access
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-default)] flex items-center justify-center text-[var(--color-secondary)] shadow-sm">
                                <Check size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Become a Tester</h3>
                                <p className="text-[var(--color-text-muted)]">Firebase App Distribution</p>
                            </div>
                        </div>

                        <p className="text-[var(--color-text-muted)] mb-8">
                            Join our early access program via Firebase App Distribution to get the latest beta builds and try new features before anyone else.
                        </p>

                        <div className="space-y-4">
                            <Button
                                href="https://appdistribution.firebase.dev/i/736fb21d19f05861" // TODO: Replace with actual invite link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-[var(--color-secondary)] hover:opacity-90 text-white justify-center py-4"
                            >
                                Join Testing Program
                            </Button>
                            <p className="text-xs text-[var(--color-text-muted)] text-center opacity-70">
                                Requires a Google account to accept the invitation.
                            </p>
                        </div>
                    </Motion.div>

                    {/* iOS Section - Moved to bottom or can be a separate row */}
                    <Motion.div
                        className="bg-[var(--color-bg-surface)] rounded-3xl p-8 border border-[var(--color-text-muted)]/20 shadow-lg relative overflow-hidden col-span-1 lg:col-span-2 mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-default)] flex items-center justify-center text-[var(--color-text-muted)] shadow-sm">
                                    <Apple size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--color-text-main)]">iOS App Store</h3>
                                    <p className="text-[var(--color-text-muted)]">Under Development</p>
                                </div>
                            </div>

                            <div className="flex-1">
                                <p className="text-[var(--color-text-muted)]">
                                    Hisava for iOS is currently in the works. We're making sure it's perfect for the Apple ecosystem.
                                </p>
                            </div>

                            <Button
                                variant="outline"
                                className="whitespace-nowrap"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Notify me on launch
                            </Button>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </div>
    );
}
