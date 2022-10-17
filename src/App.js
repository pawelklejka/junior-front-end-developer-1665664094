import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './containers/Layout/Layout';
import BusinessContent from './components/BusinessContent/BusinessContent';
import data from './assets/data/task-list.json'
import Content from './components/BusinessContent/Content/Content';
import { useState } from 'react';

function App() {
  const [context, setContext] = useState(data)

  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<Layout context={context}/>}>
            <Route path=':taskId' element={<BusinessContent />} >
              <Route path=':businessContextId' element={<Content />}/>
            </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
