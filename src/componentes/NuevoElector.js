import React, { Component, Fragment } from 'react';
import {NUEVO_ELECTOR} from '../mutations';
import {Mutation} from 'react-apollo';

class NuevoElector extends Component {
    state = { 

        elector:{
            nombre:'',
            apellido:'',
            cedula:'',
            edad:'',
            genero:'',
            email:''
           
        }
     }
    render() {
        return (

            <Fragment>
                    <h2 className="text-center mt-4">Nuevo Elector</h2>   
                    <div className="row justify-content-center">
                    <Mutation mutation={NUEVO_ELECTOR}>
                    {crearElector =>(
                        <form 
                            className="col-md-8 m-3"
                           
                            onSubmit={e =>{
                                e.preventDefault();
                                const {nombre, apellido, cedula, edad, genero, email } = this.state.elector;
                                
                                const input = {
                                   nombre,
                                   apellido,
                                   cedula: Number(cedula),
                                   edad: Number(edad),
                                   genero,
                                   email
                                  
                                };
                                console.log(input)
                            }}
                        
                        >
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Nombre</label>
                                        <input
                                        type="text"
                                        class="form-control" 
                                        placeholder="nombre"
                                        onChange={e =>{
                                            this.setState({
                                                elector:{
                                                    ...this.state.elector,
                                                    nombre: e.target.value
                                                }
                                            })
                                        }}
                                      />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Apellidos</label>
                                    <input
                                        type="text" 
                                        class="form-control"
                                        placeholder="Apellido"
                                        onChange={e =>{
                                            this.setState({
                                                elector:{
                                                    ...this.state.elector,
                                                    apellido: e.target.value
                                                }
                                            })
                                        }}
                                      />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Cedula</label>
                                    <input
                                     type="text"
                                     class="form-control"
                                     placeholder="nombre"
                                     onChange={e =>{
                                        this.setState({
                                            elector:{
                                                ...this.state.elector,
                                                cedula: e.target.value
                                            }
                                        })
                                    }}
                                     
                                     />

                                </div>
                                <div class="form-group col-md-6">
                                    <label>Edad</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Fecha Nacimiento"
                                        onChange={e =>{
                                            this.setState({
                                                elector:{
                                                    ...this.state.elector,
                                                    edad: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Género</label>
                                    <select  class="form-control"
                                        onChange={e =>{
                                            this.setState({
                                                elector:{
                                                    ...this.state.elector,
                                                    genero: e.target.value
                                                }
                                            })
                                        }}
                                    >
                                    <option value="">Elegir</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                    </select>
                                </div>
                            
                                <div class="form-group col-md-6">
                                    <label>Email</label>
                                    <input
                                     type="email"
                                     class="form-control"
                                     placeholder="Email"
                                     onChange={e =>{
                                        this.setState({
                                            elector:{
                                                ...this.state.elector,
                                                email: e.target.value
                                            }
                                        })
                                    }}
                                     />
                                </div>
                            </div>

                                                      
                            <button type="submit" className="btn btn-primary float-right">Guardar Cambios</button>
                    </form>

                    )}
                    </Mutation>
                    </div> 
            </Fragment>
                   
            
            
        );
    }
}

export default NuevoElector;