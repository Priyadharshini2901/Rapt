import './App.css';
import Radium1 from'./radium';
import Appz from './Appz';
import List from './college';
import BasicButtons from './sample';
//import {BrowserRouter,Route,Routes} from 'react-router-dom';
//import Home from './pages/home'; 
//import List from './list';
function App() {
  return (
    <div className="App">
      <Radium1 />
      <List />
      <BasicButtons />
      <Appz />
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Home />} />
          </Routes>
        </BrowserRouter>
          </div>
  );
}

export default App;