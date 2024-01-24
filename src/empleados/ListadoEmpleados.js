import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import AgregarEmpleado from './AgregarEmpleado';
import EditarEmpleado from './EditarEmpleado';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

    const urlBase = 'http://localhost:8080/rh-app/empleados';

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {   //Al cargar la pagina
        cargarEmpleados();
    }, []);

    const [id, setId] = useState("");

    function onClickHandler(event, idEmp) { 
        event.preventDefault();
        console.log('handleClick 👉️', idEmp);
        setId(idEmp);
        console.log(id);        
    }
    // console.log('setId 👉️', id);

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
                <br />
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" title='Add Employee' style={{ borderRadius: "100%" }}>
                    <span><i className="fa-solid fa-user-plus"></i></span>
                </button>
            </div>


            <AgregarEmpleado />
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark text-center'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map((empleado, index) => (
                            < tr key={index} >
                                <th className='text-center' scope="row">{empleado.idEmpleado}</th>
                                <td className='text-center'>{empleado.nombre}</td>
                                <td className='text-center'>{empleado.departamento}</td>
                                <td className='text-center'>
                                    <NumericFormat value={empleado.sueldo}
                                        displayType='text' thousandSeparator=','
                                        prefix='$' decimalScale={2} fixedDecimalScale />
                                </td>
                                <td>
                                    <div className='text-center'>
                                        {/* <button onClick={(event) => onClickHandler(event, empleado.idEmpleado)}>{empleado.idEmpleado}</button> */}
                                        {/* <Link to={`editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm'>Update</Link> */}
                                        <button onClick={(event) => onClickHandler(event, empleado.idEmpleado)} style={{ border: "none", background: "none" }} title='Update' data-bs-toggle="modal" data-bs-target="#updateModal">
                                            <span><i className="fa-solid fa-user-pen mx-3 text-primary"></i></span>
                                        </button>
                                        <button onClick={(event) => onClickHandler(event, empleado.idEmpleado)} style={{ border: "none", background: "none" }} title='Delete'>
                                            <span><i className="fa-solid fa-user-xmark text-danger"></i></span>
                                        </button>
                                    </div>
                                    < EditarEmpleado data={id} />

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
