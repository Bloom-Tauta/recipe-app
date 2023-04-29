
import './App.css';
import { Route, Routes } from "react-router-dom"
import React,{ useState} from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import TheDetails from './components/TheDetails';
// import UserDashboard from './components/UserDashboard';
// import RecipePage from './components/RecipePage';
import Share from './components/Share';
import ReviewsForm from './components/ReviewsForm';
import RecipeDetailPage from './components/RecipeDetailPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './context/AuthContext';
import Admin from './components/Admin';
import AddRecipeForm from './components/AddRecipeForm';
// import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import Dashboard from './components/Dashboard';
// import UpdateRecipes from './components/UpdateRecipe';
import SubmittedRecipes from './components/SubmittedRecipes';
// import Topbar from './components/Topbar';
// import TheForm from './components/TheForm';
// import RecipeAdd from './components/RecipeAdd';

function App() {

  const [recipes, setRecipes] =useState([])
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState('')
  function handleSearch(value){
    setSearch(value)
  }

  function postRecipe(recipeFormData){
    fetch('http://localhost:3000/recipes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeFormData)
  })
  .then(response => response.json())
  .then(data =>{
    setRecipes([...recipes, data])
    })
  }

  function postReviews(reviewsFormData){
    fetch('http://localhost:3000/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reviewsFormData)
  })
  .then(response => response.json())
  .then(data =>{
    setReviews([...reviews, data])
    })
  }

  return (
    <div className="App">
      <AuthProvider>
      <Navbar search={search} handleSearch={handleSearch} />
      <div className='min-h-[70vh]'>
      <Routes>
        {/* <Route path="/home" element={<HomePage/>}/> */}
        <Route path="/" element={<LandingPage search={search}/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/viewmeal/:id" element={<RecipeDetailPage />}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reviews" element={<ReviewsForm postReviews={postReviews}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/addrecipe" element={<AddRecipeForm postRecipe={postRecipe}/>}/>
        {/* <Route path="/update" element={<UpdateRecipes/> }/> */}
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/submitted" element={<SubmittedRecipes/>}/>
        {/* <Route path="/top" element={<Topbar/>}/> */}
      </Routes>
      </div>
      </AuthProvider>
      <Footer />
    </div>

  );
}

export default App;
