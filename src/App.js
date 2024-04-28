import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from './components/Skills';
import {Project} from './components/Project';
import { ProjectCard } from './components/ProjectCard';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
   <Skills/>
    <Project/>
    <ProjectCard/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
