import React from 'react'
import { Link } from 'react-router-dom'

export function First_page() {
  return<div>



<div className='grid grid-cols-1 relative top-[200px] bg-violet-700 w-[50%] mx-auto py-4 ' >

<Link to="/home">
<h1 className='text-center text-4xl'>قرآن الكريم</h1>

 </Link>
 
</div>

<br/>
<div className='grid grid-cols-1 relative top-[200px] bg-violet-700 w-[50%] mx-auto py-4' >

<Link to="/azkar">
<h1 className='text-center text-4xl'>الأذكار </h1>

 </Link>
 
</div>






  </div> 


 }

export default First_page