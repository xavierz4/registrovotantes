import React, { Component } from 'react';

class FormularioEditar extends Component {

    state =  {
       
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

            // const {emails} = this.state;
           
            return (
                <div className="justify-content-center">
                <form className="col-md-8 m-3">
                    <div className="form-row">
                        <div class="form-group col-md-6">
                            <label>Nombre</label>
                                <input 
                                type="text"
                                class="form-control" 
                                placeholder="nombre"
                            
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Apellido</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Apellido"
                            
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
                            
                                />
                        </div>
                
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input 
                                type="email"
                                class="form-control"
                                placeholder="Email"
                            
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
                            
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Genero</label>
                        <select 
                        className="form-control">
                        <option value="">Elegir</option>
                        <option value="FEMENINO">FEMENINO</option>
                        <option value="MASCULINO">MASCULINO</option>
                        </select>
                    </div>
                  
                </div>
               
                <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
            </form>
            </div>
            )      
    }
}
 

export default FormularioEditar;