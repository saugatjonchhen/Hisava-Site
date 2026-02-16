import { motion as Motion } from 'framer-motion';
import FaqItem from '../components/faq/FaqItem';
import { Search } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/common/SEO';

const faqData = [
    {
        category: "General",
        items: [
            { q: "What is Hisava?", a: "Hisava is a privacy-first personal finance app designed to help you track your income, expenses, and wealth without compromising your data security. It operates completely offline." },
            { q: "Is Hisava free?", a: "Yes, Hisava is completely free to download and use. There are no hidden subscriptions or paywalls for core features." },
            { q: "Which platforms supports Hisava?", a: "Hisava is currently available for Android. An iOS version is in active development and will be released soon." }
        ]
    },
    {
        category: "Privacy & Security",
        items: [
            { q: "Is my data safe?", a: "Absolutely. Hisava stores all your data locally on your device using an encrypted Hive database. We do not upload your financial data to any cloud servers." },
            { q: "Does it connect to my bank accounts?", a: "No. Hisava is designed to be offline-first and does not connect to any bank APIs. This ensures maximum privacy and manual control over your records." },
            { q: "How can I backup my data?", a: "You can easily export your data as a JSON file from the settings menu. This file can be used to restore your data on any device running Hisava." }
        ]
    },
    {
        category: "Features",
        items: [
            { q: "How does the AI Budget work?", a: "Our AI Budget tool asks you a series of questions about your financial goals and commitments, then generates a personalized monthly budget plan tailored to your needs." },
            { q: "Can I use multiple currencies?", a: "Yes! Hisava supports multiple currencies including NPR, USD, INR, and EUR. You can toggle between them, and the app handles formatting automatically." },
            { q: "What about recurring transactions?", a: "You can set up recurring transactions for EMIs, rent, subscriptions, and salaries. The app will automatically log them or remind you based on your preference." },
            { q: "Is the Tax Calculator accurate?", a: "The tax calculator uses the official Nepal Government tax slabs for FY 2081/82. However, it is an estimation tool and should be used for planning purposes." }
        ]
    },
    {
        category: "Troubleshooting",
        items: [
            { q: "The app is crashing, what should I do?", a: "Please try clearing the app cache or reinstalling. If the issue persists, contact our support team via the Contact page." },
            { q: "Can I recover a deleted transaction?", a: "Once a transaction is permanently deleted, it cannot be recovered unless you have a previous backup file. We recommend backing up your data regularly." },
            { q: "Notifications are not working.", a: "Please check your device settings to ensure Hisava has permission to send notifications. Also, verify that 'Do Not Disturb' mode is off." }
        ]
    }
];

export default function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqData.map(category => ({
        ...category,
        items: category.items.filter(item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.items.length > 0);

    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-20 pb-20">
            <SEO title="FAQ" description="Find answers to common questions about Hisava: privacy, security, features, and troubleshooting. Everything you need to know about your personal finance tracker." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <Motion.h1
                        className="text-4xl sm:text-5xl font-bold text-[var(--color-text-main)] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Frequently Asked <span className="text-[var(--color-primary)]">Questions</span>
                    </Motion.h1>
                    <Motion.p
                        className="text-lg text-[var(--color-text-muted)] mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Find answers to common questions about Hisava features, privacy, and improved usage.
                    </Motion.p>

                    {/* Search Bar */}
                    <Motion.div
                        className="relative max-w-lg mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="text-[var(--color-text-muted)]" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-text-muted)]/20 text-[var(--color-text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] shadow-sm transition-all"
                        />
                    </Motion.div>
                </div>

                <div className="space-y-12">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((category, index) => (
                            <Motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            >
                                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-6 border-l-4 border-[var(--color-primary)] pl-4">
                                    {category.category}
                                </h3>
                                <div className="bg-[var(--color-bg-surface)] rounded-2xl">
                                    {category.items.map((item, idx) => (
                                        <FaqItem key={idx} question={item.q} answer={item.a} />
                                    ))}
                                </div>
                            </Motion.div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-[var(--color-text-muted)] text-lg">No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
