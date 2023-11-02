import React from 'react'

const Card = ({ data }) => {

  return (
    <React.Fragment>
        <div>Datos registrados</div>
        
            <div>
                <p>Nombre completo: {data.nombre}</p>
                <p>Edad: {data.edad}</p>
                <p>Nacionalidad: {data.nacionalidad}</p>
            </div>
        
    </React.Fragment>
  )
}

export default Card