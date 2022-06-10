import { traerCanciones } from "../services/spotify.js"
import { useState,useEffect } from "react"

export function Consumo(){

    /*let habitaciones = [
        {
            nombre: 'Luxury',
            precio: 2500,
            foto: 'https://firebasestorage.googleapis.com/v0/b/fotoshotel-fc60b.appspot.com/o/habitacion1.jpg?alt=media&token=fbd1a97f-29d9-4f67-8d48-4c11a59ae835'
        },
        {
            nombre: 'Luxury suite',
            precio: 2500,
            foto: 'https://firebasestorage.googleapis.com/v0/b/fotoshotel-fc60b.appspot.com/o/habitacion2.jpg?alt=media&token=8262572d-acce-4156-bbe6-f3ecd839e628'
        },
        {
            nombre: 'Luxury room',
            precio: 2500,
            foto: 'https://firebasestorage.googleapis.com/v0/b/fotoshotel-fc60b.appspot.com/o/habitacion3.jpg?alt=media&token=f8f52307-6fb6-4ed1-920c-70265c9bc4c1'
        }
    ]*/

    const[canciones,setCanciones] = useState(null)
    const[estaCargando,setEstaCargando] = useState(null)
    
    // Consumiendo el servicio
    useEffect(function(){

        traerCanciones()
        .then(function(respuesta){
            setCanciones(respuesta)
            setEstaCargando(false)
        })
    },[])

    // Pregunto por el estado del servicio
    if(estacargando){
        return(
            <h1>Estamos cargando la informacion</h1>
        )
    }else {
        return(
            <>
                {
                    habitaciones.map(function(cancion,indice){
                        return (
                            <div key={indice}>
                                <h1>{cancion.nombre}</h1>
                                <audio src={cancion.preview_url} controls></audio>
                            </div>
                        )
                    })
                }
                <h1>Consumo trabajando...</h1>
                
            </>
        )
    }
    
    

}