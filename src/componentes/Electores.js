import React, {Fragment} from 'react';
import { Query } from 'react-apollo';
import{Link} from 'react-router-dom';


import { ELECTORES_QUERY } from '../querys';
import { ELIMINAR_ELECTOR } from '../mutations';

const Contactos = () => (
    <Query query={ELECTORES_QUERY} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
            if(loading) return "cargando...";
            if (error) return `Error: ${error.message}`;
            console.log(data.getElectores);

            
        return(
            <Fragment>
                <h2 className="text-center">Listado de Electores</h2>
                <ul className="list-group mt-4">
                    {data.getElectores.map(item =>(
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
                                    <Link to={`/elector/editar/${item.id}`} className="btn btn-success d-block d-med-inline-block"> Editar Elector</Link>
                                
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