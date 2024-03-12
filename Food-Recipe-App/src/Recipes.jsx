import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = ({item}) => {
  return (
    <div className='text-black text-xl w-80 flex flex-col items-center gap-5 p-5 shadow-xl border-2 border-white rounded-xl overflow-hidden'>
   <div className='flex items-center justify-center rounded-xl h-40 overflow-hidden'>
    <img src={item?.image_url} alt="recipe-item" className='block w-full'/>
   </div>
   <div> 
    <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
    <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
        <Link to={`/Recipes/${item?.id}`} className='text-sm p-4 px-8 rounded-lg uppercase font medium tracking-wider inline-block shadow-md bg-black text-white mt-5'>Recipe Details
        </Link>
    
   </div>
    </div>
  )
}

export default Recipes
