import axios from 'axios';
import React, { useState } from 'react'

export default function EditarEmpleado({ data }) {
    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    })

    const { nombre, departamento, sueldo } = empleado

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // const urlBase = 'http://localhost:8080/rh-app/empleados';
        // await axios.post(urlBase, empleado);
        // window.location.reload(true);
        // console.log(this.form.action);
        console.log("Data: " + data)

        console.log(document.forms['form']);
    }

    return (
        <div className='container'>
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form name='form' action={`/editar/${data}`} onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nombre" name='nombre' value={nombre} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="departamento" className="form-label">Departament</label>
                                    <input type="text" className="form-control" id="departamento" name='departamento' value={departamento} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sueldo" className="form-label">Salary</label>
                                    <input type="number" step="any" className="form-control" id="sueldo" name='sueldo' value={sueldo} onChange={(e) => onInputChange(e)} />
                                </div><br />
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-success me-3">Update</button>
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
