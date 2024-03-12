import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GlobalState, { GlobalContext } from './Context';

const Details = () => {
  const params = useParams();
  console.log(params + "hehehe");
  const {RecipeDetails,setRecipeDetails,handleAddToFavorite,FavoriteList} = useContext(GlobalContext)

  useEffect(()=>{
   const getDetails = async () =>{
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
    const data = await response.json();
    if(data?.data){
      setRecipeDetails(data);
      console.log(RecipeDetails);
    }
    }
    getDetails();
  },[])
  return (
    <div className='container grid mx-auto grid-cols-1 lg:grid-cols-2 gap-10 m-10 ml-2'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='h-96 overflow-hidden rounded-xl group'>
            <img src={RecipeDetails?.data?.recipe?.image_url} alt="RecipesDetails"
            className='w-full h-full object-cover block group-hover:scale-105 duration-300 '/>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <span className='text-sm text-cyan-700 font-medium'>{RecipeDetails?.data?.recipe?.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{RecipeDetails?.data?.recipe?.title}</h3>
        <div>
          <button className='p-3 px-8 rounded-lg text-sm  font-medium tracking-wider inlie-block mt-3 shadow-md bg-black text-white' onClick={()=>{handleAddToFavorite(RecipeDetails?.data?.recipe)}}>
            {
            
              FavoriteList.findIndex(item => item.id === RecipeDetails?.data?.recipe?.id) !== -1 ? "Remove From Favorites" : "Add to Favorites" 
            }
          </button>
        </div>
        <div>
          <span className='text-2xl font-semibold text-black'>Ingredients:</span>
          <ul className='flex flex-col gap-3 font-semibold mt-4'>
            {
              RecipeDetails?.data?.recipe?.ingredients.map(ingredient =>
                <li><span>{ingredient.quantity} {ingredient.unit}</span>
                <span>{ingredient.unit}</span>
                </li>
                )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details
