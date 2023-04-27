import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner } from './components/Banner';
import { Pastwork } from './components/Pastwork';
import { Initiatives } from './components/Initiatives';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Pastwork/>
    <Initiatives/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default App;
