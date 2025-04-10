import React, { useEffect, useState } from 'react'
 import { useParams } from 'react-router-dom'
 import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../../redux/dtails'
import { getdata } from '../../redux/slice'
 

 
export function Quran() {
  let{number} =useParams()
      let {details} =useSelector(function(state){return state.details})  
      console.log(details.ayahs)
     let dispatch=useDispatch()
       useEffect(function(){
          
                 dispatch(getDetails(number))
       






     },[])
   return <>
   <div className='  mx-auto   my-14 w-[50%] bg-white '>
                        <h1 className='text-center text-3xl'>{details.name}</h1>
  
                          <h2 className='text-center underline'>بسم الله  الرحمن الرحيم</h2>

                {details.ayahs?details.ayahs.map(function(ele){return<div>
                             <p className='text-center text-2xl '>{ele.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",'')}</p> 
 


 






                </div>}):""}
                  
   


    <h1>t</h1>
   </div>
  
  
  
  
  
  
  
  </>
   
}

export default Quran