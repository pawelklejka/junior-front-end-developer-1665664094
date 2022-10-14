import './App.css';
import BusinessContainer from './containers/BusinessContainer/BusinessContainer';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <div className="App">
          <Menu />
          <BusinessContainer />
          <Footer />
      </div>
  );
}

export default App;
