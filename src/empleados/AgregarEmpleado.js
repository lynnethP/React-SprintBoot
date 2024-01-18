import axios from 'axios';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function AgregarEmpleado() {

    // let navegacion = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    })

    const {nombre, departamento, sueldo} = empleado

    const onInputChange = (e) => {
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = 'http://localhost:8080/rh-app/empleados';
        await axios.post(urlBase, empleado);
        // navegacion("/");
        window.location.reload(true);
    }

    return (
        <div className='container'>

            {/* <h3>Insert Employee</h3> */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Insert Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action='/agregar' onSubmit={(e)=> onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nombre" name='nombre' value={nombre} onChange={(e)=> onInputChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="departamento" className="form-label">Departament</label>
                                    <input type="text" className="form-control" id="departamento" name='departamento' value={departamento} onChange={(e)=> onInputChange(e)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sueldo" className="form-label">Salary</label>
                                    <input type="number" step="any" className="form-control" id="sueldo" name='sueldo' value={sueldo} onChange={(e)=> onInputChange(e)}/>
                                </div><br />
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-success me-3">Add</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
