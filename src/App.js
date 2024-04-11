import {Routes,Route} from 'react-router-dom'
import './App.css';
import PageNotFound from './pages/PageNotFound.js';
import Signin from './pages/Signin.js';
import AgentHomepage from './pages/AgentHomepage.js';
import AgentDashboard from './pages/AgentDashboard.js';

function App() {
  return (
    <div >
       <Routes>
      
       <Route path='/' element={<Signin/>}/>
       <Route path='/home' element={<AgentHomepage/>}/>
       <Route path='/dashboard' element={<AgentDashboard/>}/>


       <Route path='*' element={<PageNotFound/>}/>

       </Routes>
      
    </div>
  );
}

export default App;
