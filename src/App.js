import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import CoachSingnup from './CoachSingnup';
import CoachLogin from './CoachLogin';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={ <Home /> } />

        <Route path='/coachsignup' element={ <CoachSingnup /> } />
        <Route path='/coachlogin' element={ <CoachLogin /> } />
        
        <Route path='/usersignup' element={ <UserSignup /> } />
        <Route path='/userlogin' element={ <UserLogin /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
