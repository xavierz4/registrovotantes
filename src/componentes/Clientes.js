import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import{Link} from 'react-router-dom';


import { CLIENTES_QUERY } from '../querys';
import { ELIMINAR_CLIENTE } from '../mutations';

const Contactos = () => (
    <Query query={CLIENTES_QUERY}  pollInterval={500} >
        {({ loading, error, data,  startPolling, stopPolling }) => {
            if(loading) return "cargando...";
            if (error) return `Error: ${error.message}`;
            console.log(data.getClientes);

            
        return(
            <Fragment>
                <h2 className="text-center">Listado Clientes</h2>
                <ul className="list-group mt-4">
                    {data.getClientes.map(item =>(
                        <li key={item.id} className="list-group-item">
                            <div className="row justify-content-between aling-items-center">
                                <div className="col-md-8 d-flex justify-content-between aling-items-center" >
                                    {item.nombre} {item.apellido} 
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                <button type="button" className="btn btn-danger d-block d-mb-inline-block mr-2"
                                    onClick={() => {
                                        console.log(item.id)
                                    }}
                                >
                                    &times;Eliminar
                                </button>
                                    <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-med-inline-block"> Editar Cliente</Link>
                                
                                </div>

                            </div>
                        
                        </li>
                    ))}
                </ul>
            </Fragment>
            
        )
        }}


    </Query>
)

export default Contactos;