import { motion as Motion } from 'framer-motion';
import SEO from '../components/common/SEO';

export default function Privacy() {
    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-12 pb-20">
            <SEO title="Privacy Policy" description="Hisava Privacy Policy. Learn how we handle your data: 100% offline, local storage only, and zero external tracking." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-4">Privacy Policy</h1>
                <p className="text-[var(--color-text-muted)] mb-12">Last Updated: February 1, 2026</p>

                <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--color-text-muted)] prose-headings:text-[var(--color-text-main)] prose-strong:text-[var(--color-text-main)]">
                    <p>
                        At Hisava, we believe your financial data belongs to you—and only you. This Privacy Policy explains how we handle your information.
                        The short version: <strong>We do not collect, store, or sell your personal financial data.</strong>
                    </p>

                    <h3>1. Data Collection & Storage</h3>
                    <p>
                        Hisava is an <strong>offline-first application</strong>. All financial records, budgets, and personal information you enter into the app are stored locally on your device using an encrypted database.
                        We do not have servers that store your financial transactions.
                    </p>

                    <h3>2. User Accounts</h3>
                    <p>
                        Hisava does not require you to create an account or log in to use the app. Your profile information (name, age, avatar) exists solely on your device.
                    </p>

                    <h3>3. Third-Party Services</h3>
                    <p>
                        We use limited third-party services to improve the app experience:
                    </p>
                    <ul>
                        <li><strong>Google Play Services</strong>: For app distribution and updates.</li>
                        <li><strong>Firebase Analytics & Crashlytics</strong>: To collect anonymous usage data (e.g., "App opened", "Crash report") and improve app stability. These services do not have access to your financial entries.</li>
                    </ul>

                    <h3>4. Data Backup</h3>
                    <p>
                        Since we do not store your data, we cannot recover it if you lose your device. We encourage you to use the built-in <strong>Backup & Restore</strong> feature to periodically export your data and save it to a secure location (like Google Drive or local storage).
                    </p>

                    <h3>5. Changes to This Policy</h3>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <h3>6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:saugat.john09@gmail.com" className="text-[var(--color-primary)] hover:underline">saugat.john09@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
