import React, { Component, Fragment } from 'react';

class NuevoCliente extends Component {
    state = {  }
    render() {
        return (

            <Fragment>
                    <h2 className="text-center mt-4">Nuevo Cliente</h2>   
                    <div className="row justify-content-center">
                        <form className="col-md-8 m-3">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" placeholder="nombre"/>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Apellido</label>
                                    <input type="text" class="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Empresa</label>
                                    <input type="text" class="form-control" placeholder="Empresa"/>
                                </div>
                            
                                <div class="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Edad</label>
                                    <input type="text" class="form-control" placeholder="Edad"/>
                                </div>
                            

                            <div class="form-group col-md-6">
                                <label>Tipo Cliente</label>
                                <select  class="form-control">
                                <option value="">Elegir</option>
                                <option value="PREMIUM">PREMIUM</option>
                                <option value="BASICO">BASICO</option>
                                </select>
                            </div>
                            </div>
                          
                            <button type="submit" className="btn btn-primary float-right">Guardar Cambios</button>
                    </form>
                    </div> 
            </Fragment>
                   
            
            
        );
    }
}

export default NuevoCliente;