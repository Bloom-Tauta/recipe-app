import { Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';
import RecipeForm from './components/RecipeForm';
import RatingForm from './components/RatingsForm';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/recipe-form" element={<RecipeForm/>}/>
        <Route path="/rating" element={<RatingForm/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>


      </Routes>
    </div>
  );
}

export default App;
