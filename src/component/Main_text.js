import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Main_text(props) {
const[value,setvalue]=useState("")  
const query_change=(input)=>{
  setvalue(input.target.value)

}
const query_search=(e)=>{
  e.preventDefault()
  props.set_query(value)
 

}   
  
  


  return (
    <div>
        <div className="continer text_container">
            <h3>Free stock photos and images</h3>
            <h1 className="main_text">
Download stunning photos for websites and commercial use</h1>

<div className="search">
  <form action="" onClick={query_search}  >

    <input type="text" onChange={query_change}  className='search_query'  placeholder='Search free photos' />
<Link  to={"/"+value}  ><button type="submit" className='search_btn' >Search</button></Link>
  </form>
</div>
        </div>
    </div>
  )
}
