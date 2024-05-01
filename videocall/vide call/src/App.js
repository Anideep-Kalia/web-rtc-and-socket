// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
<Navbar tally="using props" Action="this is also using props"/>

    </>
  );
}

export default App;
