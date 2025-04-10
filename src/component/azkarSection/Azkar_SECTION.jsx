import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getazkar } from '../../redux/azkar'
import { Link, useParams } from 'react-router-dom'

function Azkar_SECTION() {
   
 let details = useSelector(function(state){return state.azkar})
 console.log(details.azkar)

  let dispatch=useDispatch()
 function c(){


 }
 let {id}=useParams()
useEffect(function(){
  dispatch(getazkar())
},[])

  return <>
       <div className="grid grid-cols-1 md:grid-cols-1  md: mx-auto md:w-[900px] w-full  py-[50px] ">
 
           {details.azkar?details.azkar.map(function(ele){return<>
 
 
                <div className='text-center bg-white text-2xl  px-2'>
                                        {ele.id==id? ele.array.map(function(e){return<div>


 
                                            <h2>{e.text}</h2>

                                        </div>  }):""}                          
                       
                   
                  </div>           
               
          

           
          
          </>}):""}
            
         </div>  
   
  
  
  
  
  
  
  </> 
}

export default Azkar_SECTION