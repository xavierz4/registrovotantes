import React, { Component, Fragment } from 'react';
import {ELECTOR_QUERY} from '../querys';
import {Query} from 'react-apollo';
import FormularioEditarElector from './FormularioEditarElector';

class EditarElector extends Component {
    state = {  }
    render() {

        const { id } = this.props.match.params;
        console.log(id);

        return (
            

            <Fragment>
                 
                <h2  className="text-center">Editar Elector</h2>
                <div className="row justify-content-center"> 
                    <Query query={ELECTOR_QUERY} variables= {{id}}>
                    {({loading, error, data}) =>{
                        if (loading) return 'cargando';
                        if (error) return `Error! ${error.message}`;
                        console.log(data);
                        return (
                            <FormularioEditarElector
                            elector = {data.getElector}
                            id
                            />
                        )
                    }}

                </Query>
            </div>
            </Fragment>
        );
    }
}

export default EditarElector;