import React,{useState} from 'react'
import './home.css'
import Typical from 'react-typical'



const Home = (props) => {
  const[search,setSearch]=useState(0)
  return (
    <div className='home' id='Home'>
<div className='home-left'>
    <div className='home-header'>
      <div className='header-title' >
      <h2>{props.superClassName}<span>Son</span> Phi<span>lip</span></h2> 
      <h3>{props.className} </h3>
      
      </div>
      

      <div>
      <h5 className='home-typical'>
    <Typical
    loop={Infinity} 
    steps={[
     " An Algorithmist  || Programmer",
    8000,
    "An Enthusiatic UI & UX designer ",
    6000,
    " A  Web Designer || developer",
    4000,
    "  An Experienced Digital Marketer ",
    3000,
    ]}
    />
    </h5>
    <h4>Based in Abuja Nigeria</h4>
      </div> 
    <a href="Agebson2.pdf" download=" Agebson2.pdf">
    <button className='btn4' >Get Resume</button>
    </a>
</div>
  </div>

    <div className='home-right'>
    <div className='searchBar'>
        <input type="text" onChange={(e=>setSearch(e.target.value))}/>


      </div>
      
        </div>

    </div>
  )
}

export default Home