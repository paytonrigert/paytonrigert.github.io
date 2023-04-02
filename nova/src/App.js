import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Clients from './components/Clients';
const App = () => {
    return (
        <div className="App">
            <Navbar />    
            <Header />
            <About />
            <Achievements />
            <Services />
            <Clients />
            <Testimonial />
            <Skills />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
};

export default App;
