import React, { useContext } from 'react'
import { GlobalContext } from './Context'
import Recipes from './Recipes';

const Home = () => {
  const {RecipeList,Loading,id} = useContext(GlobalContext);
  if(Loading) return <h1 className='text-3xl flex items-center font-bold'>Loading...Please Wait..</h1>

  return (
    <>
    <div className="container flex flex-wrap py-8 justify-center gap-10 mx-auto">
       
        {            
          RecipeList && RecipeList.length ? 
          (
            RecipeList.map((item) => { 
                return  <div><Recipes item ={item}/></div>
          })
          )
          : <h1 className='text-3xl flex items-center font-bold'>Nothing to show. Please enter some text..</h1>
        }

    </div>
    </>
  )
}

export default Home
