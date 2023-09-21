import { Link, Route, Routes } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Restaurants />}></Route>
        <Route path='/details/:id' element={<Details />}/>
      <Route />
      </Routes>
    </div>
  );
}

export default App;
