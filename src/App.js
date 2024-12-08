import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Photo from './Components/Photo/Photo';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';



const App = () =>{
  return(
    <div className='app'>
     
     < Navbar/>
     < Photo/>
     < About/>
     < Services/>
     <MyWork />
     < Contact/>
     < Resume/>
     <Footer/>
     

    </div>
  )
}
export default App;