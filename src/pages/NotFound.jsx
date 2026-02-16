import { motion as Motion } from 'framer-motion';
import { Home, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
            <SEO title="404 Not Found" description="The page you are looking for could not be found. Return to Hisava's home page for personal finance tracking." />
            <div className="max-w-2xl w-full text-center">
                {/* Visual Element */}
                <Motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-12"
                >
                    <div className="text-[10rem] sm:text-[15rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent select-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-24 h-24 sm:w-32 sm:h-32 bg-[var(--color-bg-surface)] rounded-3xl shadow-2xl border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)]"
                        >
                            <AlertCircle size={64} strokeWidth={1.5} className="sm:w-20 sm:h-20" />
                        </Motion.div>
                    </div>
                </Motion.div>

                {/* Text Content */}
                <Motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-4">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/" variant="primary" className="w-full sm:w-auto">
                            <Home size={18} className="mr-2" /> Back to Home
                        </Button>
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-6 py-3 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors font-medium"
                        >
                            <ArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </Motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
        </div>
    );
}
