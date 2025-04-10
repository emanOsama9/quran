import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../../redux/slice'
import { Link } from 'react-router-dom'
import { getazkar } from '../../redux/azkar'

export function Azkar() {
  
 let details = useSelector(function(state){return state.azkar})
  console.log(details.azkar)
 
   let dispatch=useDispatch()
  function c(){


  }
 useEffect(function(){
   dispatch(getazkar())
 },[])
 
  return <>
       <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md: mx-auto md:w-[900px] w-full  py-[100px] ">
           {details.azkar?details.azkar.map(function(ele){return<>
          
 
                <div className='py-5 hover:underline transition-all duration-300 sm:text-2xl hover:scale-90 cursor-pointer text-white bg-fuchsia-600	 text-center'>
 
                          <Link to={`/azkar_section/${ele.id}`}>
                          <h2>{ele.category}</h2> 

                          
                          </Link>                       
                      
                   
                  </div>           
               
          

           
          
          </>}):""}
            
         </div>  
  </>
}

export default Azkar