import React, { Component } from 'react';

import {ACTUALIZAR_ELECTOR} from '../mutations';
import {Mutation} from 'react-apollo';

class FormularioEditar extends Component {

    state =  {
        elector: this.props.elector,
        email: this.props.elector.email
        // emails: []

    }

  /*   nuevoCampo = () => {
        this.setState({
            emails: this.state.emails.concat([{email:''}])
        })
    }

    leerCampo = i => e => {
        const nuevoMail = this.state.emails.map((email, index) => {
                if (i !== index) return email;
                return { ...email, email: e.target.value };
        });
        this.setState({ emails: nuevoMail });
    }

    quitarCampo = i => () => {
        this.setState({
            emails: this.state.emails.filter((s, index) => i !== index)
        });
    }
 */


    render() { 
            const {nombre, apellido, cedula, edad, email, genero} = this.state.elector;
            
            //const {emails} = this.state;
            // const {emails} = this.state;
           
            return (
                <Mutation mutation={ACTUALIZAR_ELECTOR}>

                   {actualizarElector =>(
                        <form className="col-md-8 m-3" onSubmit={e => {
                            e.preventDefault();

                            const {id, nombre, apellido, cedula, edad, email, genero } = this.state.elector;
                            
                            const input = {
                                id, 
                                nombre,
                                apellido,
                                cedula: Number(cedula),
                                edad: Number(edad),
                                email,
                                genero
                            
                        }
                            console.log(input);
                        }}>  

                 
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label>Nombre</label>
                                <input 
                                type="text"
                                class="form-control" 
                                placeholder="nombre"
                                defaultValue={nombre}
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
                        <div className="form-group col-md-6">
                            <label>Apellido</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Apellido"
                                defaultValue={apellido}
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
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label>Cedula</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Cedula"
                                defaultValue={cedula}
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
                
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input 
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                defaultValue={email}
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

                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Edad</label>
                        <input
                            type="text"
                            class="form-control" 
                            placeholder="Edad"
                            defaultValue={edad}
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

                    <div className="form-group col-md-6">
                        <label>Genero</label>
                        <select 
                        className="form-control"
                        value={genero}
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
                        <option value="FEMENINO">FEMENINO</option>
                        <option value="MASCULINO">MASCULINO</option>
                        </select>
                    </div>
                  
                </div>
               
                <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
            </form>
             )}
           </Mutation>
            )      
    }
}
 

export default FormularioEditar;