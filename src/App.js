import './App.css';
import LSide from './components/LSide';
import RSide from './components/RSide';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="row1">
        <LSide />
        <RSide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
