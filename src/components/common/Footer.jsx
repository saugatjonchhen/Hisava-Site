import { Link } from 'react-router-dom';
import { Github, Linkedin, Facebook, Instagram, Mail, Heart, Check, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleJoin = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "newsletter", email })
        })
            .then(() => {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch(error => {
                console.error("Newsletter submission error:", error);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            });
    };

    return (
        <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--color-text-muted)]/10 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg overflow-hidden">
                                <img src="/icon.png" alt="Hisava Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold text-[var(--color-text-main)]">Hisava</span>
                        </Link>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                            Your Money, Your Clarity. A privacy-first personal finance tracker built for effortless control over your finances.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/saugatjonchhen" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors" title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/saugat-john09/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors" title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.facebook.com/saugat.john09" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[#1877f2] transition-colors" title="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/saugat.john09/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[#e4405f] transition-colors" title="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="mailto:saugat.john09@gmail.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors" title="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[var(--color-text-main)] mb-6">Developer</h4>
                        <ul className="space-y-3">
                            <li><a href="https://saugatjonchhen.com.np/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">Live Portfolio</a></li>
                            <li><a href="https://saugatjonchhen.netlify.app/" target="_blank" rel="noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">Work in Progress</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-[var(--color-text-main)] mb-6">Support</h4>
                        <ul className="space-y-3">
                            <li><Link to="/faq" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">FAQ</Link></li>
                            <li><Link to="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="font-semibold text-[var(--color-text-main)] mb-6">Stay Updated</h4>
                        <p className="text-[var(--color-text-muted)] text-sm mb-4">
                            Get the latest updates and tips for financial freedom.
                        </p>
                        <form
                            onSubmit={handleJoin}
                            className="space-y-3"
                            name="newsletter"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="newsletter" />
                            <p className="hidden">
                                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 bg-[var(--color-bg-default)] border border-[var(--color-text-muted)]/20 rounded-lg text-sm focus:outline-none focus:border-[var(--color-primary)] text-[var(--color-text-main)]"
                                    disabled={status === 'loading' || status === 'success'}
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center min-w-[70px] ${status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-[var(--color-primary)] text-white hover:opacity-90'
                                        }`}
                                >
                                    {status === 'loading' ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : status === 'success' ? (
                                        <Check size={16} />
                                    ) : (
                                        'Join'
                                    )}
                                </button>
                            </div>
                            {status === 'success' && (
                                <p className="text-xs text-green-500 font-medium animate-pulse">
                                    Thanks for joining! We'll keep you posted.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="border-t border-[var(--color-text-muted)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--color-text-muted)] text-sm">
                        &copy; {currentYear} Saugat Jonchhen. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-[var(--color-text-muted)] text-sm">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                        <span>in Nepal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
