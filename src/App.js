import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/Home';
import Quran from './component/quranindex/Quran';
import Nav from './component/Nav/Nav';
import First_page from './component/first_page/First_page';
import Azakr from './component/اذكار/Azakr';
import Azkar_SECTION from './component/azkarSection/Azkar_SECTION';
 
function App() {
  return <>
        <Nav/>
            <Routes>
              
            <Route path='firstPage' element={<First_page/>}/>

           <Route path='' element={<First_page/>}/>
 
             <Route path='home' element={<Home/>}/>


             <Route path='quran' element={<Quran/>}>
 
             
                          <Route path=':number' element={<Quran/>}/>

             
             
             
             
             
             
             </Route>

            
            
             <Route path='azkar_section' element={<Azkar_SECTION/>}>
 
             
                  <Route path=':id' element={<Azkar_SECTION/>}/>

             
             
             
             
             
             
             </Route>

            <Route path='azkar' element={<Azakr/>}/>
            
            
            
            
            </Routes>  
 
  
  </>
    
 }

export default App;
