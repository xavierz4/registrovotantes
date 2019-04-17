import React, {Fragment} from 'react';
import { Query } from 'react-apollo';


import { CLIENTES_QUERY } from '../querys';

const Contactos = () => (
    <Query query={CLIENTES_QUERY} >
        {({ loading, error, data }) => {
            if(loading) return "cargando...";
            if (error) return `Error: ${error.message}`;
            console.log(data.getClientes);

            
        return(
            <Fragment>
                <h2 className="text-center mt-4">Listado Clientes</h2>
                <ul className="list-group mt-4">
                    {data.getClientes.map(item =>(
                        <li key={item.id} className="list-group-item">
                            <div className="row justify-content-between aling-items-center">
                                <div className="col-md-8 d-flex justify-content-between aling-items-center" >
                                    {item.nombre} {item.apellido} 
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <a className="btn btn-success d-block d-med-inline-block"> Editar Cliente</a>
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