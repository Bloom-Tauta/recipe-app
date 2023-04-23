
import './App.css';
import { Route, Routes } from "react-router-dom"
import React,{ useState} from 'react';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import TheDetails from './components/TheDetails';
import UserDashboard from './components/UserDashboard';
import RecipePage from './components/RecipePage';
import Share from './components/Share';
import ReviewsForm from './components/ReviewsForm';
import RecipeDetailPage from './components/RecipeDetailPage';

function App() {

  const [recipes, setRecipes] =useState([])
  const [search, setSearch] = useState('')
  function handleSearch(value){
    setSearch(value)
  }


  return (
    <div className="App">
      <NavBar search={search} handleSearch={handleSearch} />
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<LandingPage search={search}/>}/>
        <Route path="/viewmeals/:id" element={<RecipePage/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path="/viewmeal/:id" element={<RecipeDetailPage />}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/reviews" element={<ReviewsForm/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
