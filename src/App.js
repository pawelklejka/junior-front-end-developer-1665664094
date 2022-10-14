import './App.css';
import BusinessContainer from './containers/BusinessContainer/BusinessContainer';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import Layout from './containers/Layout/Layout';
import Content from './components/BusinessContent/Content/Content';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<Layout />}>
            <Route path=':taskId/*' element={<BusinessContainer />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
