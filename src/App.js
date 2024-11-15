import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact1';
import Contact1 from './components/Contact1';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact1/>
      <Footer/>
    </div>
  );
}

export default App;
