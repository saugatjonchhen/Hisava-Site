import { motion as Motion } from 'framer-motion';

export default function FeatureCard({ icon: CardIcon, title, description, delay = 0 }) {
    return (
        <Motion.div
            className="bg-[var(--color-bg-surface)]/50 backdrop-blur-sm border border-[var(--color-text-muted)]/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
        >
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform duration-300">
                <CardIcon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {title}
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
                {description}
            </p>
        </Motion.div>
    );
}
