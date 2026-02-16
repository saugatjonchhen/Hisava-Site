import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Maker from '../components/home/Maker';
import AppScreenshots from '../components/home/AppScreenshots';
import DownloadSection from '../components/home/DownloadSection';
import SEO from '../components/common/SEO';

export default function Home() {
    return (
        <>
            <SEO title="Home" description="Privacy-first personal finance tracking with AI-powered insights. Track your wealth, expenses, and savings with clarity." />
            <Hero />
            <Features />
            <HowItWorks />
            <Maker />
            <AppScreenshots />
            <DownloadSection />
            {/* Other sections will go here */}
        </>
    );
}
