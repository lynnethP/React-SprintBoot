import React from 'react'
import { Link } from 'react-router-dom'
import AgregarEmpleado from '../empleados/AgregarEmpleado'

export default function Navegacion() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Human Resource System</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/agregar" data-bs-toggle="modal" data-bs-target="#exampleModal">Insert</Link>
                            </li>
                        </ul>
                        
                        <AgregarEmpleado />
                        {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Insert Employee</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="depart" className="form-label">Departament</label>
                                                <input type="text" className="form-control" id="depart" name='depart' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="sueldo" className="form-label">Salary</label>
                                                <input type="number" className="form-control" id="sueldo" name='salary' />
                                            </div><br />
                                            <div className='text-center'>
                                                <button type="submit" className="btn btn-success me-3">Add</button>
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
