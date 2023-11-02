import React, { useState } from 'react';
import Card from './Card';

const RegisterForm = () => {

    const [data, setData] = useState({});
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState(true);
    
    const handleName  = (e) => {
        //setFullname(e.target.value)
        setData({...data,nombre:e.target.value})
    }
    const handleAge  = (e) => {
        //setAge(e.target.value)
        setData({...data,edad:e.target.value})

    }
     const handleNacionality  = (e) => {
        //setNationality(e.target.value)
        setData({...data,nacionalidad:e.target.value})

    }
    
/*     const validateAge = (age) => {
        const parsedAge = parseInt(age);
        return isNaN(parsedAge) || parsedAge < 1;
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log( fullname, age, nationality );
        

        if(data.nombre.length > 3 && data.edad>0 && data.nacionalidad.length > 6){
            setErrorMessage(false)
            
            console.log(data);
        }else{
            setShow(true)
        }

    }

  return (
    <div>
        <h2>Datos de usuario</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <label>Nombre completo:</label>
                <input
                    type="text"
                    name="fullname"
                    //value={fullname}
                    onChange={handleName}
                />
            </div>

            <div>
                <label>Edad:</label>
                <input
                    type="number"
                    name="age"
                    //value={age}
                    onChange={handleAge}
                />
            </div>

            <div>
                <label>Nacionalidad:</label>
                <input
                    type="text"
                    name="nacionalidad"
                    //value={nationality}
                    onChange={handleNacionality}
                />
            </div>
            {(errorMessage && show) && <span>hay errores.</span>}
            <button type="submit">Enviar</button>
        </form>
        <br />
        {(!show && !errorMessage) && <Card data={data} />}
    </div>
  )
}

export default RegisterForm;