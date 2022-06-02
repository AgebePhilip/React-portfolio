
import React from 'react';
import {Provider} from 'react-redux'
import Store from './Components/Redux/Store'
import './App.css';
import CakesContainer from './Components/CakesContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import Home from './Components/home/Home';
import About from './Components/about/About';

import Nav from './Components/Nav';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import What from './Components/What';
import Contact from './Components/Contact';









function App() {
  return (



    <Provider store={Store}>
 <div className="App">

<Nav/>

   <Home className='A Front end  Developer' superClassName="Hi,  I'M Ageb"/>
   
 <Contact/>
   
   <About/>
   
   <Skill/>
   <What/>
  

   
   
   <Footer/>


   
  

  
  
   
   
 

  
   {/*
   <CakesContainer/>
  <NewCakeContainer/>
   <About/>
   <Login/>
   <Project/>
   
   */}
  
   
    </div>
    </Provider>
   
  );
}

export default App;
