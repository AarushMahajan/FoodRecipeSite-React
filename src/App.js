import React , {useEffect,useState} from 'react';

import './App.css';
import Recipe from './Components/Recipe';

function App() {

  const App_id="f876d448";
  const App_key="c2c948d778349ab17956cba5c8a568c0";

  const [string, setstring] = useState("");
  const [save, setsave] = useState("apple") 

  const [recipes, setrecipe] = useState([])

  useEffect(() => {
    getRecipies();
  }, [save] );

  const getRecipies = async () =>{
     const responce = await fetch(`https://api.edamam.com/search?q=${save}&app_id=${App_id}&app_key=${App_key}`);
     const result = await responce.json();
     setrecipe(result.hits);
     console.log(result);
  }

  const updateString = e =>{
    setstring(e.target.value);
    // console.log(string)
  }

  const storeW = (e) =>{
    e.preventDefault();
    setsave(string); 
    setstring("");
  }

  return (
    <div className="App">

     <form onSubmit={storeW} className="form-fr">

    <input type="text" placeholder="Search Here" value={string} onChange={updateString} className="textbox1-fr"></input>
    <button type="submit" className="button1-fr">Search</button>

     </form>
     <div className="div-app">
     {
       recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} im={recipe.recipe.image} ingre={recipe.recipe.ingredientLines} key={recipe.recipe.label}/>
       ))
     }
     </div>
    </div>
  );
}

export default App;
