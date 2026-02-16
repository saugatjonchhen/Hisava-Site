import { motion as Motion } from 'framer-motion';
import dashboardImg from '../../assets/images/Dashboard.jpeg';
import wealthImg from '../../assets/images/Wealth.jpeg';
import transactionImg from '../../assets/images/Transaction.jpeg';
import statsImg from '../../assets/images/Stats.jpeg';
import aiBudgetImg from '../../assets/images/Budget AI.jpeg';
import taxCalcImg from '../../assets/images/Tax Calculator.jpeg';

const screenshots = [
    { id: 1, title: "Dashboard", image: dashboardImg },
    { id: 2, title: "Wealth Breakdown", image: wealthImg },
    { id: 3, title: "Add Transaction", image: transactionImg },
    { id: 4, title: "Statistics", image: statsImg },
    { id: 5, title: "AI Budget", image: aiBudgetImg },
    { id: 6, title: "Tax Calculator", image: taxCalcImg }
];

export default function AppScreenshots() {
    return (
        <section id="screenshots" className="py-20 bg-[var(--color-bg-surface)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)] mb-4">
                        Beautifully Designed for <span className="text-[var(--color-primary)]">Clarity</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-muted)]">
                        A glimpse into the Hisava experience. Clean, intuitive, and distraction-free.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {screenshots.map((screen) => (
                        <div key={screen.id} className="flex-none snap-center">
                            <Motion.div
                                className="w-72 h-[580px] bg-gray-800 rounded-[2.5rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden relative group"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Notch Overlay */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>

                                {/* Screen Content */}
                                <div className="w-full h-full bg-[var(--color-bg-default)] overflow-hidden">
                                    <img
                                        src={screen.image}
                                        alt={screen.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* Hover Title Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-white font-bold text-lg">{screen.title}</h4>
                                </div>
                            </Motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
