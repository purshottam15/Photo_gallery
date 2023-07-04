import React, { useEffect, useState } from 'react'
import  "../App.css"


export default function Photo(props) {
    const [photo_url, setPhoto_url] = useState([]);  
    const [error, set_error] = useState(false);
    const [query, set_query] = useState();
   




    async function fetch_photo(query){
      props.setSpinner(true)
        try{ let photo= await fetch(`https://pixabay.com/api/?key=32395397-81682bba220e9e694a2920032&per_page=100&q=${query}&image_type=photo&pretty=true`)
        console.log(query)
        let photo_fetched= await photo.json()
        setPhoto_url(photo_fetched.hits)
        props.setSpinner(false)
        if(photo_fetched.hits.length<1){
          set_error(true)
        }
      }
        catch(error){
            console.log(error,"getting error")

        }
       
    }   
    
useEffect(()=>{
 

    
    
    fetch_photo(props.query)

},[])   

const handleDownload=(url)=>{
  let link=document.createElement('a')
  link.href=url
  link.download="Image.jpg"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)


}

const query_change=(e)=>{
  set_query(e.target.value)


}
const query_search=(e)=>{
  e.preventDefault()
  props.set_query(query)
  fetch_photo(props.query)
 

}



    


  return (
    <>
       <div className="container photo_search_container">

<input type="text" placeholder='Search free images' onChange={query_change} />
<button className='search_btn' onClick={query_search}>Search</button>
</div>
    

    <div className="photo_container container">
   
    
      
     
   
     {error?<h2 className='error_handling'><center>Not Found</center></h2>: photo_url.map((x)=>(
          <div className="gallery_image" key={x.id}>
        <img src={x.largeImageURL} alt=""  />
       <button className="download_btn" onClick={()=>handleDownload(x.pageURL)}>Download</button>

    </div>

      ))}
       
    
        </div>
        </>
    
  )
}
