import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variantClasses = {
    primary: 'bg-[var(--color-primary)] text-white hover:opacity-90 shadow-lg shadow-[var(--color-primary)]/20 active:shadow-none',
    secondary: 'bg-[var(--color-secondary)] text-white hover:opacity-90 shadow-lg shadow-[var(--color-secondary)]/20 active:shadow-none',
    outline: 'border border-[var(--color-text-muted)] text-[var(--color-text-main)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] bg-transparent',
    ghost: 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-surface)]',
    white: 'bg-white text-[var(--color-primary)] hover:bg-slate-50 shadow-lg'
};

const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold'
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    to,
    onClick,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 cursor-pointer';

    const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = (
        <Motion.div
            className="flex items-center justify-center gap-[inherit] w-full h-full"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </Motion.div>
    );

    if (to) {
        return (
            <Link to={to} className={finalClassName} {...props}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={finalClassName} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button className={finalClassName} onClick={onClick} {...props}>
            {content}
        </button>
    );
};

export default Button;
