import logo from './logo.svg';
import './App.css';
import './css/stylesheet.css'
import Navbarr from './components/Navbarr';
import Footer from './components/Footer';
import AllRouter from './routers/AllRouter';

function App() {
  return (
    <div>
        <Navbarr />
        <AllRouter />
        <Footer />

    </div>
  );
}

export default App;
