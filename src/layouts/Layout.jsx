import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-bg-default)] text-[var(--color-text-main)] transition-colors duration-300">
            <Header />
            <main className="flex-grow pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
