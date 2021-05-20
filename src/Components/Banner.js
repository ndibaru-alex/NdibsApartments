import React from 'react'
 

export default function banner({children,title,subtittle}) {
    return (
        
        <div className='banner'>
            <h1>{title}</h1>
            <p>{subtittle}</p> 
                       
            {children}
        </div>
        
    )
}