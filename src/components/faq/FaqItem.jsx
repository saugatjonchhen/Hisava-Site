import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[var(--color-text-muted)]/20 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 px-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-main)] group-hover:text-[var(--color-primary)]'}`}>
                    {question}
                </span>
                <Motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-4 ${isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}
                >
                    <ChevronDown size={20} />
                </Motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 px-6 text-[var(--color-text-muted)] leading-relaxed">
                            {answer}
                        </p>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
