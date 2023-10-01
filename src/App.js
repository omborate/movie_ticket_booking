import { BrowserRouter , Router,Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Arrange from './Components/Arrange';
import Details from './Components/Details';
import Arrange1 from './Components/Arrange1';
import Details1 from './Components/Details1';
import OpenHeimerUsers from './Components/OpenHeimerUsers';
import KgfUsers from './Components/KgfUsers';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navigation/>
       <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/arrange' element={<Arrange/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/details1' element={<Details1/>}/>
        <Route path='/arrange1' element={<Arrange1/>}/>
        <Route path='/openheimerusers' element={<OpenHeimerUsers/>}/>
        <Route path='/kgfusers' element={<KgfUsers/>}/>


       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
