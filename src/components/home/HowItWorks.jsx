import { motion as Motion } from 'framer-motion';
import { UserPlus, TrendingUp, Lightbulb } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: UserPlus,
        title: "1. Setup Profile",
        description: "Create your personalized profile with custom avatars and set your financial goals.",
        color: "bg-[var(--color-primary)]"
    },
    {
        id: 2,
        icon: TrendingUp,
        title: "2. Track Everything",
        description: "Log your income, expenses, savings, and investments with ease. No bank connections needed.",
        color: "bg-[var(--color-secondary)]"
    },
    {
        id: 3,
        icon: Lightbulb,
        title: "3. Gain Clarity",
        description: "Let our AI analyze your habits and generate smart budget plans for a secure future.",
        color: "bg-[var(--color-tertiary)]"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-32 bg-[var(--color-bg-default)] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-6">
                        Master Your Money in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">3 Simple Steps</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        No complex setup. No bank linking anxiety. Just you and your financial clarity.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-[var(--color-tertiary)]/20 -translate-y-1/2 -z-10 rounded-full"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <Motion.div
                                key={step.id}
                                className="relative flex flex-col items-center text-center bg-[var(--color-bg-surface)] p-6 rounded-2xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className={`w-20 h-20 rounded-2xl ${step.color} shadow-lg shadow-[var(--color-primary)]/20 flex items-center justify-center text-white mb-8 relative z-10 transform transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                                    <step.icon size={36} strokeWidth={2} />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-bg-surface)] rounded-full border-4 border-[var(--color-bg-default)] flex items-center justify-center text-sm font-bold text-[var(--color-text-main)] shadow-sm">
                                        {step.id}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">
                                    {step.title.split('. ')[1]}
                                </h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
