import React, { useState } from 'react';
import Data from './Card';

const RegisterForm = () => {
    const [fullname, setFullname] = useState('');
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState('');
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "fullname") {
            setFullname(value);
        } else if (name === "age") {
            setAge(value);
        } else if (name === "nacionalidad") {
            setNationality(value);
        }
    }
    
    const validateAge = (age) => {
        const parsedAge = parseInt(age);
        return isNaN(parsedAge) || parsedAge < 1;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( fullname, age, nationality );


        let mensajeError = '';
        
        if (fullname.length < 3 || fullname.trim() !== fullname) {
            mensajeError = 'Por favor chequea que la información de nombre sea correcta.';
        } else if (nationality.length < 6) {
            mensajeError = 'Por favor chequea que la información de nacionalidad sea correcta.';
        } else if (validateAge){
            mensajeError = 'Por favor chequea que la información de edad sea correcta.';

        }
    
        
    
        if (!mensajeError) {
            //setmostrarCard(true);

        } //else setErrorMessage(mensajeError);
        console.log(mensajeError);
        setData([{ fullname, age, nationality }]);
        setFullname('');
        setAge(0);
        setNationality('');

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
                    value={fullname}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Edad:</label>
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Nacionalidad:</label>
                <input
                    type="text"
                    name="nacionalidad"
                    value={nationality}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
        <br />
        <Data data={data} />
    </div>
  )
}

export default RegisterForm;