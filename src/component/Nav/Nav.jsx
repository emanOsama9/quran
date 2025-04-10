import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  let headerref=useRef()
  useEffect(function(){

    window.addEventListener("scroll",function(){
           if(window.scrollY>100){
            headerref.current.style.backgroundColor = 'white';

            headerref.current.style.color='black'
 
           }
           else{
            headerref.current.style.color='white';
            headerref.current.style.backgroundColor='transparent'

            }

    })
  },[])
  return<>

  
  
    <header className='container mx-auto  dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl   text-white' ref={headerref}          >
         <nav className='flex items-center fixed top-0 py-[20px]  right-5 left-5' >
                  <ul className='me-auto'>
                    <Link> <h1 className='text-4xl	'>Musliem</h1> </Link>

                    
                    </ul> 
                  <ul className=' ms-auto flex gap-11 '>
                  <Link to="firstpage"className=' hover:underline'><li>Home</li></Link>

            <Link to="home "className=' hover:underline'><li>Quran</li></Link>

           <Link to="quran"className=' hover:underline'><li>Details </li></Link>
 
           <Link to="azkar"className=' hover:underline'><li>Azkar</li></Link>

                   </ul>




         


         </nav>


 
 











    </header>
  
  
  
  
  
  
  
  
  
  
  
  </>  
}

export default Nav