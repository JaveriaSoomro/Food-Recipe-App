import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import GlobalState, { GlobalContext } from './Context'

const Navbar = () => {
  const {searchParam,setsearchParam,handleSubmit} =  useContext(GlobalContext)
  console.log(searchParam);
  return (
    <div>
    <header className="text-white body-font bg-black">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
    <div>
    <Link to={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">Food-Recipe-App</span>
    </Link>
    </div>
    <div>
    <form onSubmit={handleSubmit} ><input type="search" value={searchParam} onChange={(event)=>{setsearchParam(event.target.value)}} placeholder='search here' className='text-white border-none outline-none bg-slate-900 p-1 rounded-md w-96'/>
    </form> </div>
    <div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <Link to={"/"} className="mr-5 hover:text-white">Home</Link>
     <Link to={"/Favorites"} className="mr-5 hover:text-white">Favorites</Link>
    </nav>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar
