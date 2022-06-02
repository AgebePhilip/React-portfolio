import React,{useState} from 'react'
import { buyCake } from './Redux'
import { connect } from 'react-redux'

function NewCakesContainer(props) {
    const [number,setNumber]= useState(1)
  return (
    <div>
        <h1 className='header'>Number of cakes-{props.numOfCake}</h1>

        <input type='text'  className='button'value={number} onChange={e=>setNumber(e.target.value)}/>

        <button className='btn' onClick={()=>props.buyCake(number)}>Buy{number} Cake</button>
        </div>
  )
}
const mapStateToProps=state=>{
  return{
    numOfCake :state.numOfCake
  }

}
 const mapDispatchToProps= dispatch=>{
   return{
     buyCake:number=>dispatch( buyCake(number))
   }
 }
export default connect(mapStateToProps, mapDispatchToProps) (NewCakesContainer)