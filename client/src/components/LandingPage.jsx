import Navbar from "./Navbar";
import Footer from "./Footer";




function LandingPage(){

    const recipes = [
        { id: 1, name: 'burger', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        { id: 2, name: ' hotdog', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        { id: 3, name: ' chicken', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        { id: 4, name: ' sushi', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        { id: 5, name: ' bread', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        { id: 6, name: ' french fries', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        // { id: 7, name: ' sausage', image: 'https://media.istockphoto.com/id/182744943/photo/burger.jpg?b=1&s=170667a&w=0&k=20&c=Zcd1pQz6GNoL9CjT8jVckQy02iV9fEokhBeUyKxsnxM='  },
        // { id: 8, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 9, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 10, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 11, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 12, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 13, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},
        // { id: 14, name: ' sausage', image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg'},


      ];



    return(
        <div>
            <Navbar/>
            <div  className="min-h-screen">
            <h1 className="text-center p-2">Delicious Recipes</h1>
            <div className="flex">
                {recipes.map(recipe => (
                <div className="recipe-card" key={recipe.id}>
                    <div className="recipe-image">
                    <img src={recipe.image} alt={`Recipe ${recipe.id}`} />
                    </div>
                    <div className="flex flex-col items-center">
                    <h2 className="text-center">{recipe.name}</h2>
                    <button className="border border-black p-1 rounded-lg bg-green-200 mt-4">View More</button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;