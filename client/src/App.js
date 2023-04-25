
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
import RecipeForm from './components/RecipeForm';
import About from './components/About';
import RecipeDetailPage from './components/RecipeDetailPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './context/AuthContext';

function App() {

  // const [recipes, setRecipes] =useState([])
  const [search, setSearch] = useState('')
  function handleSearch(value){
    setSearch(value)
  }


  return (
    // <BrowserRouter>
      <div className="App">
          <AuthProvider>
              <Navbar search={search} handleSearch={handleSearch} />
              <div className='min-h-[70vh]'>
                <Routes>
                  <Route path="/" element={<LandingPage search={search}/>}/>
                  {/* <Route path="/viewmeals/:id" element={<RecipePage/>}/> */}
                  {/* <Route path="/user-dashboard" element={<UserDashboard/>}/> */}
                  <Route path="/viewmeal/:id" element={<RecipeDetailPage />}/>
                  <Route path="/share" element={<Share/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/reviews" element={<ReviewsForm/>}/>
                  <Route path="/forms" element={<RecipeForm/>}/>
                  <Route path="/about" element={<About/>}/>
                </Routes>
              </div>
            <Footer />
          </AuthProvider>
      </div>
    // </BrowserRouter>
    
  );
}

export default App;
