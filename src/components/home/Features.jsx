import {
    LayoutDashboard,
    PieChart,
    Bot,
    UserCircle,
    Calculator,
    Repeat,
    LineChart,
    Palette
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
    {
        icon: LayoutDashboard,
        title: "Smart Dashboard",
        description: "Real-time tracking of Total Wealth vs Spendable Balance for instant clarity.",
        delay: 0.1
    },
    {
        icon: PieChart,
        title: "Wealth Breakdown",
        description: "Detailed analysis of your asset distribution: Savings, Investments, and Cash.",
        delay: 0.2
    },
    {
        icon: Bot,
        title: "AI Budget Plans",
        description: "Get personalized budgeting strategies based on your unique financial profile.",
        delay: 0.3
    },
    {
        icon: UserCircle,
        title: "Profile Customization",
        description: "Personalized onboarding with custom avatars to make the app truly yours.",
        delay: 0.4
    },
    {
        icon: Calculator,
        title: "Tax Calculator",
        description: "Built-in Nepal Tax Engine updated for FY 2081/82 slab-based calculations.",
        delay: 0.1
    },
    {
        icon: Repeat,
        title: "Recurring Transactions",
        description: "Automate tracking for EMIs, subscriptions, and regular bill payments.",
        delay: 0.2
    },
    {
        icon: LineChart,
        title: "Advanced Analytics",
        description: "Visualize your financial health with monthly/yearly stats and trend comparisons.",
        delay: 0.3
    },
    {
        icon: Palette,
        title: "Premium Themes",
        description: "Choose from sleek Light, Dark, or System-based dynamic themes.",
        delay: 0.4
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-[var(--color-bg-surface)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-4">
                        Powerful Features for <span className="text-[var(--color-primary)]">Total Control</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        Everything you need to master your finances, packed into one beautiful, privacy-focused app.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
