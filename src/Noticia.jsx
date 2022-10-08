import React from 'react'
import './Noticia.css'
import estrela from './assets/estrela.jpg'
export function Noticia(props){
    return(
        <article className="noticia">
            <div className='titulo'>
                <h1>{props.titulo}</h1>
            </div>
           
            <img style={{width:250,height:250}} src={estrela}/>
        </article>
    )
}