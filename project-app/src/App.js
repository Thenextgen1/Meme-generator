import './App.css';
import Navbar from './components/NavBar/NavBar'
import Memes from './components/Memes/Memes'

function App() {
  return (
    <div className="memegenerator-container">
      <Navbar />
      <Memes />
    </div>
  );
}

export default App;
