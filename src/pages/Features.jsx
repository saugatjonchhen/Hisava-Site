import { motion as Motion } from 'framer-motion';
import {
    User,
    PieChart,
    List,
    Brain,
    Calculator,
    Shield,
    CheckCircle2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';

const featuresData = [
    {
        id: 'dashboard',
        title: "Comprehensive Wealth Dashboard",
        icon: PieChart,
        description: "Get a complete picture of your financial health at a glance.",
        items: [
            { title: "Financial Status", desc: "Real-time tracking of 'Total Wealth' vs 'Spendable Balance'." },
            { title: "Wealth Breakdown", desc: "Dedicated analysis of Savings, Investments, and Cash assets." },
            { title: "Interactive Charts", desc: "Income vs. Expense donut charts and trend analysis." },
            { title: "Advanced Stats", desc: "Monthly and yearly view modes with historical comparisons." }
        ]
    },
    {
        id: 'transactions',
        title: "Transactions & Management",
        icon: List,
        description: " effortlessly log and organize your financial activities.",
        items: [
            { title: "Smart Logging", desc: "Categorize Income, Expense, Savings, and Investments." },
            { title: "Recurring Transactions", desc: "Auto-schedule EMIs, subscriptions, and rent." },
            { title: "Category Manager", desc: "Custom categories with personalized icons and colors." },
            { title: "Multi-Currency", desc: "Support for NPR, USD, INR, EUR with dynamic formatting." }
        ]
    },
    {
        id: 'ai-planning',
        title: "AI-Driven Budget Planning",
        icon: Brain,
        description: "Let artificial intelligence guide your spending and saving habits.",
        items: [
            { title: "Smart Questionnaire", desc: "Assess fixed commitments and savings goals." },
            { title: "Personalized Plans", desc: "Choose from Balanced, High Savings, or Debt-Focused strategies." },
            { title: "Financial Outlook", desc: "Detailed 1-year projections with educational breakdowns." },
            { title: "Budget History", desc: "Track adherence and historical performance over time." }
        ]
    },
    {
        id: 'tax-calculator',
        title: "Nepal-Specific Tax Calculator",
        icon: Calculator,
        description: "Stay compliant with built-in tax tools for Nepal.",
        items: [
            { title: "Nepal Tax Engine", desc: "Updated for FY 2081/82 slab-based calculations." },
            { title: "Tax Configuration", desc: "View and edit tax brackets directly within the app." },
            { title: "Instant Liability", desc: "Quick estimated tax calculation based on income." },
            { title: "Salary Adjustments", desc: "Optimize for varied salary structures and bonuses." }
        ]
    },
    {
        id: 'personalization',
        title: "Personalization & Profile",
        icon: User,
        description: "Make the app truly yours with deep customization options.",
        items: [
            { title: "Custom Avatars", desc: "Choose from preset icons or upload your own profile picture." },
            { title: "Dynamic Theming", desc: "Full Light, Dark, and System-based theme support." },
            { title: "Budget Cycles", desc: "Set custom cycle start days to align with your salary." },
            { title: "Premium Design", desc: "Modern, consistent UI with glassmorphism aesthetics." }
        ]
    },
    {
        id: 'security',
        title: "Security & Reliability",
        icon: Shield,
        description: "Your data never leaves your device. 100% private and secure.",
        items: [
            { title: "Offline First", desc: "All data stored locally using encrypted Hive database." },
            { title: "No Bank Linking", desc: "Zero external connections for maximum privacy." },
            { title: "Auto-Backup", desc: "Scheduled backups to prevent accidental data loss." },
            { title: "easy Restore", desc: "JSON export/import for seamless device migration." }
        ]
    }
];

export default function Features() {
    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-20">
            <SEO title="Features" description="Explore Hisava's powerful features: AI budget plans, wealth breakdown, manual transaction logging, and Nepal-specific tax calculator." />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-[var(--color-bg-surface)]/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-main)] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Features that Empower <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Your Financial Life</span>
                    </Motion.h1>
                    <Motion.p
                        className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        From AI-driven insights to offline security, Hisava is packed with tools to help you master your money without compromising privacy.
                    </Motion.p>
                </div>
            </section>

            {/* Feature Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {featuresData.map((category, index) => (
                            <Motion.div
                                key={category.id}
                                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Visual Side */}
                                <div className="flex-1 w-full">
                                    <div className="relative bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-3xl p-8 sm:p-12 border border-[var(--color-primary)]/10 shadow-xl overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform duration-500">
                                                <category.icon size={40} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-2">{category.title}</h3>
                                            <p className="text-[var(--color-text-muted)]">{category.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 w-full">
                                    <h2 className="text-3xl font-bold text-[var(--color-text-main)] mb-6">
                                        {category.title}
                                    </h2>
                                    <p className="text-lg text-[var(--color-text-muted)] mb-8 leading-relaxed">
                                        {category.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-[var(--color-text-main)] font-semibold">
                                                    <CheckCircle2 size={20} className="text-[var(--color-secondary)] flex-shrink-0" />
                                                    <span>{item.title}</span>
                                                </div>
                                                <p className="text-sm text-[var(--color-text-muted)] pl-7">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero CTA */}
            <section className="py-20 bg-[var(--color-bg-surface)] text-center border-t border-[var(--color-text-muted)]/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-6">Ready to take control?</h2>
                    <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
                        Join the privacy-first financial revolution. Download Hisava today.
                    </p>
                    <Button to="/download" variant="primary" size="lg">
                        Get Started Now
                    </Button>
                </div>
            </section>
        </div>
    );
}
