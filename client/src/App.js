import { Route, Routes } from "react-router-dom"
import './App.css';
import RecipeForm from './components/RecipeForm';
import ReviewsForm from "./components/ReviewsForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipeForm/>}/>
        {/* <Route path="/recipe-form" element={<RecipeForm/>}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/sharesocials" element={<ShareComponent2/>}/>
        <Route path="/ratings" element={<RatingsForm/>}/>
        <Route path="/recipe-details" element={<RecipeDetails/>}/> */}
        <Route path="/reviews" element={<ReviewsForm/>}/>


      </Routes>
    </div>
  );
}

export default App;
