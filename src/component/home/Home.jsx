import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../redux/slice'
import { Link } from 'react-router-dom'

export function Home() {
  
 let {quran,loading,errors}= useSelector(function(state){return state.quran})
  console.log(quran)
  const [alpha, setAlpha] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'q', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'x']);

   let dispatch=useDispatch()
  function c(){


  }
 useEffect(function(){
   dispatch(getdata())
 },[])
 
  return <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md: mx-auto md:w-[900px] w-full  py-[100px] ">
           {quran? quran.map(function(ele){return<>
          
 
                <div className='py-5 hover:underline transition-all duration-300 sm:text-2xl hover:scale-90 cursor-pointer text-white bg-fuchsia-600	 text-center'>
                <Link to={`/quran/${ele.number}`}>

                      <div><h2>{ele.name}</h2></div>
                       
                      
                      </Link>
                  
                  </div>           
               
          

           
          
          </>}):""}
            
         </div>  
  </>
}

export default Home