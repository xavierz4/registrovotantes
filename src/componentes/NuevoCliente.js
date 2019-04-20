import React, { Component, Fragment } from 'react';

import {NUEVO_CLIENTE} from '../mutations';
import {Mutation} from 'react-apollo';


class NuevoCliente extends Component {
    state = { 
        cliente:{
            nombre:'',
            apellido:'',
            empresa:'',
            edad:'',
            email:'',
            tipo:'',
        },

        error:false
     }
    render() {
        const {error} = this.state;
        let respuesta = (error) ? <p className="alert alert-warning p-3 text-center" >Todos los campos son Obligatorios</p> : '';

        return (

            <Fragment>
                    <h2 className="text-center">Nuevo Cliente</h2>   
                    {respuesta}
                    <div className="row justify-content-center">
                     <Mutation
                         mutation={NUEVO_CLIENTE}
                         onCompleted={() => this.props.history.push('/')}
                         >
                        {crearCliente =>(
                            <form
                                className="col-md-8 m-3"
                                onSubmit={e =>{
                                    e.preventDefault();
                                    const {nombre, apellido, empresa, edad, email, tipo } = this.state.cliente;
                                    
                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        edad: Number(edad),
                                        email, 
                                        tipo,   
                                    };
                                    crearCliente({
                                        variables: {input}
                                    })
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
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        nombre: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Apellido</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Apellido"
                                            onChange={e =>{
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        apellido: e.target.value
                                                    }
                                                })
                                            }}
                                        
                                        />
                                        
                                    </div>
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Empresa</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            placeholder="Empresa" 
                                            onChange={e =>{
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        empresa: e.target.value
                                                    }
                                                })
                                            }}
                                            />
                                    </div>
                                
                                    <div class="form-group col-md-6">
                                        <label>Email</label>
                                        <input 
                                            type="email"
                                            class="form-control"
                                            placeholder="Email"
                                            onChange={e =>{
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        email: e.target.value
                                                    }
                                                })
                                            }} 
                                        />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Edad</label>
                                        <input
                                            type="text"
                                            class="form-control" 
                                            placeholder="Edad"
                                            onChange={e =>{
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        edad: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                

                                <div class="form-group col-md-6">
                                    <label>Tipo Cliente</label>
                                    <select 
                                        onChange={e =>{
                                            this.setState({
                                                cliente:{
                                                    ...this.state.cliente,
                                                    tipo: e.target.value
                                                }
                                            })
                                        }}
                                        class="form-control">
                                    <option value="">Elegir</option>
                                    <option value="PREMIUM">PREMIUM</option>
                                    <option value="BASICO">BASICO</option>
                                    </select>
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

export default NuevoCliente;