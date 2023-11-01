import React from 'react'

const Data = ({ data }) => {
  return (
    <React.Fragment>
        <div>Datos registrados</div>
        {data.map((item, index) => (
            <div key={index}>
                <p>Nombre completo: {item.fullname}</p>
                <p>Edad: {item.age}</p>
                <p>Nacionalidad: {item.nationality}</p>
            </div>
        ))}
    </React.Fragment>
  )
}

export default Data