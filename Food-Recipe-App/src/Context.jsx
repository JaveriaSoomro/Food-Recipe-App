import React, { createContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null)

const GlobalState = ({children}) => {
    const [searchParam, setsearchParam] = useState("");
    const [Loading, setLoading] = useState(false);
    const [RecipeList, setRecipeList] = useState([]);
    const [id, setid] = useState([]);
    const [RecipeDetails, setRecipeDetails] = useState(null);
    const [FavoriteList, setFavoriteList] = useState([]);

    const navigate = useNavigate();

    const handleAddToFavorite = (getCurrentItem) =>{
        //   console.log(getCurrentItem); 
          let cpyFavoriteList = [...FavoriteList];
          let index =  cpyFavoriteList.findIndex(item=> item.id === getCurrentItem.id)

          if(index === -1){
            cpyFavoriteList.push(getCurrentItem)
          }
          else{
            cpyFavoriteList.splice(index)
          }
          setFavoriteList(cpyFavoriteList)
          console.log(cpyFavoriteList);
          }
    const handleSubmit = async (event)=>{
        event.preventDefault()
try {
const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
const data = await response.json();

if(data?.data?.recipes) {
    setRecipeList(data?.data?.recipes)
    setid(data?.data?.recipes.id)
    setLoading(false)
    setsearchParam('')
    navigate('/');
}
console.log(RecipeList);
    
} catch (e) {
    console.log(e);
    setLoading(false)
    setsearchParam('')
}
    }
  return (
    <GlobalContext.Provider value={{searchParam,RecipeList,Loading, setsearchParam,handleSubmit,id,RecipeDetails,setRecipeDetails,handleAddToFavorite,FavoriteList, setFavoriteList}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
