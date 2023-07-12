import Navbar from './components/layout/Navbar';
import DownloadExtension from './components/sections/DownloadExtension';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Faq from './components/sections/faq';
import Features from './components/sections/features/Features';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <DownloadExtension />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
