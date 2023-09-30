import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import NavBAR from './components/NavBar';
import './index.css'



function App() {
  return (
   
    <Router>
      <NavBAR/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route exact path="/NewPost" element={<NewPost/>}>
          
        </Route>

      </Routes>

    </Router>
   
  );
}

export default App
