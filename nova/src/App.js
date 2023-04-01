import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
};

export default App;
