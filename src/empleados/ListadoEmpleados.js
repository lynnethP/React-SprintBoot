import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

export default function ListadoEmpleados() {

    const urlBase = 'http://localhost:8080/rh-app/empleados';

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {   //Al cargar la pagina
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const result = await axios.get(urlBase);    //Esperar respuesta del backEnd
        console.log("Result employees");
        console.log(result.data);
        setEmpleados(result.data);
    }

    return (
        <div className='container'>
            <div className="container text-center" style={{ margin: "30px" }}>
                <h2>Human Resources System</h2>
            </div>

            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado, index) => (
                            < tr key={index} >
                                <th scope="row">{empleado.idEmpleado}</th>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.departamento}</td>
                                <td>
                                    <NumericFormat value={empleado.sueldo}
                                        displayType='text' thousandSeparator=','
                                        prefix='$' decimalScale={2} fixedDecimalScale />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
