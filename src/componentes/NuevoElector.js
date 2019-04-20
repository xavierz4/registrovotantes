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
           
        },

        error:false
     }
    render() {
        const {error} = this.state;
        let respuesta = (error) ? <p className="alert alert-warning p-3 text-center" >Todos los campos son Obligatorios</p> : '';

        return (

            <Fragment>
                    <h2 className="text-center">Nuevo Elector</h2>   
                    {respuesta}
                    <div className="row justify-content-center">
                     <Mutation 
                        mutation={NUEVO_ELECTOR}
                        onCompleted={() => this.props.history.push('/')}
                        
                     >
                        {crearElector =>(
                            <form
                                className="col-md-8 m-3"
                                onSubmit={e =>{
                                    e.preventDefault();
                                    const {nombre, apellido, cedula, edad, genero, email, genero } = this.state.elector;
                                    
                                    if (nombre === '' || apellido === '' || cedula === '' || edad === '' || genero === '') {
                                        this.setState({
                                            error: true
                                        });
                                        return;
                                    }

                                    this.setState({
                                        error: false
                                    });

                                    const input = {
                                        nombre,
                                        apellido,
                                        cedula: Number(cedula),
                                        edad: Number(edad),
                                        genero,
                                        email,
                                        genero
                                    };
                                    crearElector({
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
                                                    elector:{
                                                        ...this.state.elector,
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
                                            placeholder="Empresa" 
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

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Edad</label>
                                        <input
                                            type="text"
                                            class="form-control" 
                                            placeholder="Edad"
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
                                    
                                    <div class="form-group col-md-6">
                                        <label>Genero</label>
                                        <input
                                            type="text"
                                            class="form-control" 
                                            placeholder="Genero"
                                            onChange={e =>{
                                                this.setState({
                                                    elector:{
                                                        ...this.state.elector,
                                                        genero: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>

                                </div>
                            
                                <button type="submit" className="btn btn-primary float-right">Registrar Elector</button>
                        </form>
                        )}
                    </Mutation>
                    </div> 
            </Fragment>
                   
            
            
        );
    }
}

export default NuevoElector;