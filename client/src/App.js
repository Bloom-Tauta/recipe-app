import { Routes, Route } from 'react-router-dom'
import './App.css';
import About from './Components/About';
import LandingPage from './components/LandingPage';
import RecipeForm from './components/RecipeForm';
import RatingForm from './components/RatingsForm';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
  function handleSubmit (e){
    e.preventDefault()
    const formData=new FormData()
    formData.append("recipe[recipeName]",e.target.recipeName.value)
    formData.append("recipe[recipeimage]",e.target.recipeImage.files[0])
    formData.append("recipe[description]",e.target.description.value)
    formData.append("recipe[countryOfOrigin]",e.target.countryOfOrigin.value)
    formData.append("recipe[numberOfPeopleServed]",e.target.numberOfPeopleServed.value)
    formData.append("recipe[ingredients]",e.target.ingredients.value)
    formData.append("recipe[instructions]",e.target.instructions.value)
    formData.append("recipe[dateTime]",e.target.dateTime.value)
     sendDataToBackEnd(formData)
    console.log(e.target.image.files[0])
    console.log(e.target.title.value)
    console.log(e.target.description.value)
  }
  function sendDataToBackEnd(formData){
    fetch("http://localhost:3000/recipes",{
      method: "POST",
      body: formData
    }).then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
  }
  return (
    <div className="App">
      { <form onSubmit={(e)=>handleSubmit(e)}>
        <input placeholder='recipe-name' type="text" name="recipe-name" />
        <input type="file" name="recipe-image" accept="image/jpg, image/png" />
        <input placeholder='description' type="text" name="description" />
        <input placeholder='countrty-of -origin' type="text" name="country-of-origin" />
        <input placeholder='number-of-people-served' type="text" name="number-of-people served" />
        <input placeholder='ingredients' type="text" name="ingredients" />
        <input placeholder='instructions' type="text" name="instructions" />
        <input placeholder='datetime' type="text" name="datetime" />

        <input type="submit"  />
      </form> }
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
