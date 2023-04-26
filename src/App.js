import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner } from './components/Banner';
import { Pastwork } from './components/Pastwork';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Pastwork/>
    </div>
  );
}

export default App;
