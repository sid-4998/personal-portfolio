import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
    return (
        <div className='bg-[#050414]'>
            <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='relative pt-20'>
                <Navbar />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
