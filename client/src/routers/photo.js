
import React, {useEffect, useState} from 'react';

export default function Photo() {
    const [images, setImages ] = useState([]);
      
      async function getUploads() {
        const response = await fetch("http://localhost:8080/api/upload"

        )
        const { data } = await response.json();
        setImages(data.uploads)

    }
      useEffect(()=>{ getUploads()}, [])
        {
        }
        
        
        return (
            <div>
            <p> Welcome</p>
            
            <div style={{ flex: 1 }}>
            {
                images.map((image)=>(
                    <img style={{ width: 250, height: 250 , marginRight: 10 }} src={image.url}/>
                ))
            }
            </div>
            
        </div>
    )
}

/*
 <img class="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top">
<div class="card-body">
<h3 class="card-title">Card title</h3>
<h4 class="card-subtitle">Card subtitle</h4>
<p class="card-text">This is a simple Card example</p>
*/