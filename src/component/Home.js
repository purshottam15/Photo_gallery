import React from 'react'
import Header from './Header';
import Main_text from './Main_text';
import Gallery from './Gallery';
import Spinner from './Spinner';

export default function Home(props) {
  console.log(props.set_query)
  return (
    <div>
      {/* <Spinner/> */}
      
     <Header/>
     <Main_text set_query={props.set_query}/>
     <h3 className="top_pics">Top-picks</h3>
     

    <Gallery/>
    </div>
  )
}
