import React, { useContext } from 'react'
import { GlobalContext } from './Context'
import Recipes from './Recipes';

const Favorites = () => {
  const {FavoriteList} = useContext(GlobalContext);

  return (
    <>
    <div className="container flex flex-wrap py-8 justify-center gap-10 mx-auto">
       
        {            
          FavoriteList && FavoriteList.length ? 
          (
            FavoriteList.map((item) => { 
                return  <div><Recipes item ={item}/></div>
          })
          )
          : <h1 className='text-3xl flex items-center font-bold'>Nothing to Added To Favorites!</h1>
        }

    </div>
    </>
  )
}

export default Favorites
