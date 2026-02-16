import { motion as Motion } from 'framer-motion';
import SEO from '../components/common/SEO';

export default function Terms() {
    return (
        <div className="bg-[var(--color-bg-default)] min-h-screen pt-12 pb-20">
            <SEO title="Terms of Service" description="Hisava Terms of Service. Read the terms and conditions for using the Hisava personal finance tracker." />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h1 className="text-4xl font-bold text-[var(--color-text-main)] mb-4">Terms of Service</h1>
                <p className="text-[var(--color-text-muted)] mb-12">Last Updated: February 1, 2026</p>

                <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--color-text-muted)] prose-headings:text-[var(--color-text-main)] prose-strong:text-[var(--color-text-main)]">
                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By downloading or using the Hisava app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.
                    </p>

                    <h3>2. Use License</h3>
                    <p>
                        We grant you a personal, non-transferable, non-exclusive license to use the Hisava application on your devices. You are not allowed to copy, or modify the app, any part of the app, or our trademarks in any way.
                    </p>

                    <h3>3. Disclaimer</h3>
                    <p>
                        The comprehensive financial tools provided by Hisava (including budget planning and tax calculations) are for informational purposes only. While we strive for accuracy (e.g., using official Nepal Tax rates), we are not financial advisors. You should not rely solely on the app for critical financial decisions.
                    </p>

                    <h3>4. Limitation of Liability</h3>
                    <p>
                        Hisava is provided "as is" without any warranties. In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the app.
                    </p>

                    <h3>5. Changes to Terms</h3>
                    <p>
                        We adhere to strict privacy practices but may update our Terms of Service. Thus, you are advised to review this page periodically for any changes.
                    </p>

                    <h3>6. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms of Service, please contact us at <a href="mailto:saugat.john09@gmail.com" className="text-[var(--color-primary)] hover:underline">saugat.john09@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
