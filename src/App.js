
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
// import Navpage from './pages/Navpage/Navpage';
import Profile from './pages/Profile/Profile';
import Project from './pages/Project/Project';
import Company from './pages/Company/Company';
import Jobs from './pages/Jobs/Jobs';
import Messages from './pages/Messages/Messages';
import Notifications from './pages/Notifications/Notifications';



function App() {
  
  return (
  <div className="app">
    <BrowserRouter>
    <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/company' element={<Company />}/>
            <Route exact path='/project' element={<Project />}/>
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/jobs' element={<Jobs />}/>
            <Route exact path='/messages' element={<Messages />}/>
            <Route exact path='/notifications' element={<Notifications />}/>
        </Routes>
        </BrowserRouter>
  </div>
  
  

  );
 
}

export default App;
