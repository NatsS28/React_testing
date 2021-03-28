import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Signup />

    </div>
  );
}

export default App;
