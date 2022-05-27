import {Navbar} from './Navbar.js'

export function PrimerComponente(){

    let nombre = "Mateo Guisao"

    let datos = {nombre: "Mateo",edad: 23,apellido: "Guisao"}

    return(

        
        <div>
            <Navbar/>

            
            <h1 className = "text-center">Bienvenidos</h1>
            <p className = "text-center">Esta es mi primera app con REACT soy {nombre}</p>

            <ul className = "text-center">
                <li>
                    Soy {datos.nombre}
                </li>
                <li>
                    Tengo {datos.edad} años
                </li>
                <li>
                    Me apellido {datos.apellido}
                </li>
            </ul>
        </div>
    
    )

}