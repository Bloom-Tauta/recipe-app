
import './App.css';
import { Route, Routes } from "react-router-dom"
import React,{ useState} from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Share from './components/Share';
import RecipeDetailPage from './components/RecipeDetailPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AddRecipeForm from './components/AddRecipeForm';
import AdminDashboard from './components/AdminDashboard';
import SubmittedRecipes from './components/SubmittedRecipes';
import HomePage from './components/HomePage';
import UserDashboard from './components/UserDashboard';
import About from './components/About';
import Users from './components/Users';


function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  function handleSearch(value){
    setSearch(value)
  }

  return (
    <div className="App">

      <Navbar search={search} handleSearch={handleSearch} />
      <div className='min-h-[70vh] flex flex-col'>
      <Routes>
        <Route path="/home" element={<LandingPage recipes={recipes} setRecipes={setRecipes} search={search}/>}/>
        <Route path="/admins" element={<AdminDashboard/>}/>
        <Route path="/viewmeal/:id" element={<RecipeDetailPage />}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addrecipe" element={<AddRecipeForm recipes={recipes} setRecipes={setRecipes}/>}/>
        <Route path="/submitted" element={<SubmittedRecipes/>}/>
        <Route path="/user" element={<UserDashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/allusers" element={<Users/>}/>
      </Routes>
      </div>

      <Footer />
    </div>

  );
}

export default App;
