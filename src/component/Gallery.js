import React, { useEffect, useState } from 'react'
import  "../App.css"


export default function Gallery(props) {
    const [photo_url, setPhoto_url] = useState([]);  


    async function fetch_photo(){
        try{ let photo= await fetch('https://pixabay.com/api/?key=32395397-81682bba220e9e694a2920032&category=animal&image_type=photo&pretty=true')
        let photo_fetched= await photo.json()
        setPhoto_url(photo_fetched.hits)}
        catch(error){
            console.log(error,"getting error")

        }
       
    }   
    
useEffect(()=>{
   
    
    
    fetch_photo()

},[])   




    


  return (
    <div className="gallery_container">
   
     { photo_url.map((x)=>(
          <div className="gallery_image" key={x.id}>
        <img src={x.largeImageURL}  alt=""  />
      

    </div>

      ))}
       
    
        </div>
    
  )
}
