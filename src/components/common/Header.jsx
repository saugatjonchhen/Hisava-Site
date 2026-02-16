import { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Laptop } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useTheme } from '../../hooks/useTheme';

const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Download', href: '/download' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const options = [
        { id: 'light', name: 'Light', icon: Sun },
        { id: 'dark', name: 'Dark', icon: Moon },
        { id: 'system', name: 'System', icon: Laptop },
    ];

    const ActiveIcon = options.find(opt => opt.id === theme)?.icon || Laptop;

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-surface)] transition-all flex items-center gap-2 group"
                aria-label="Select theme"
            >
                <ActiveIcon size={20} className="group-hover:scale-110 transition-transform" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-36 bg-[var(--color-bg-surface)] border border-[var(--color-text-muted)]/20 rounded-xl shadow-xl z-[60] overflow-hidden"
                    >
                        <div className="p-1">
                            {options.map((opt) => {
                                const Icon = opt.icon;
                                const isActive = theme === opt.id;
                                return (
                                    <button
                                        key={opt.id}
                                        onClick={() => {
                                            setTheme(opt.id);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                                            : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-default)] hover:text-[var(--color-text-main)]'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {opt.name}
                                    </button>
                                );
                            })}
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [location.pathname]); // Listen to pathname specifically

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-[var(--color-bg-surface)]/80 backdrop-blur-lg shadow-sm border-[var(--color-text-muted)]/10'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <Motion.div
                            whileHover={{ rotate: 10 }}
                            className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img src="/icon.png" alt="Hisava Logo" className="w-full h-full object-cover" />
                        </Motion.div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] tracking-tight">
                            Hisava
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] font-medium transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <ThemeToggle />
                        <Button to="/download" size="sm">Download App</Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg-surface)]/95 backdrop-blur-xl border-t border-[var(--color-bg-surface)] overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-[var(--color-text-muted)]/10" />
                            <Button to="/download" className="w-full justify-center">
                                Download Now
                            </Button>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
