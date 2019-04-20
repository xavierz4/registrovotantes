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

        error:false,
        emails:[]

     }

     leerCampo = i => e =>{
        const nuevoEmail = this.state.emails.map((email, index) =>{
            if (i !== index) return email;
            return {
                ...email,
               email: e.target.value
            }
        });
        this.setState({
            email: nuevoEmail
        })
    }


     nuevoCampo = () =>{
       this.setState({
           emails: this.state.emails.concat([{email:''}])
       }) 
     }

     eliminarCampo = i => () => {
         this.setState({
            emails: this.state.emails.filter((email, index) => i !== index)
         })
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
                                    const {nombre, apellido, empresa, edad, tipo } = this.state.cliente;
                                    const {emails} = this.state;
                                    
                                    if(nombre)


                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        edad: Number(edad),
                                        emails, 
                                        tipo   
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
                                    <div class="form-group  col-md-12">
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

                               {
                                   /*Recorrer email, ingresar, eliminar y leer campos

                                    */                             
                               }

                                {this.state.emails.map((input, index)=>

                                    <div key={index} className="form-group col-md-12">
                                        <label>Correo {index +1}</label>

                                        <div className="input-group">
                                            <input
                                            onChange={this.leerCampo(index)}
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
                                            />
                                            
                                            <div className="input-group-append">
                                                <button
                                                onClick={this.eliminarCampo(index)}
                                                    type="button"
                                                    className="btn btn-danger"
                                                >&times;

                                                   Eliminar 
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                  <div className="form-group d-flex justify-content-center col-md-12">
                                            <button
                                            onClick={this.nuevoCampo}
                                             type="button"
                                             className="btn btn-warning"
                                             
                                             >Agregar Email</button>
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
                                

                                <div class="form-group  col-md-6">
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