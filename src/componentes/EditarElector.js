import React, { Component, Fragment } from 'react';
import {ELECTOR_QUERY} from '../querys';
import {Query} from 'react-apollo';

class EditarElector extends Component {
    state = {  }
    render() {

        const { id } = this.props.match.params;
        console.log(id);

        return (
            

            <Fragment>
                 
                <h2  className="text-center">Editar Elector</h2>

                <Query query={ELECTOR_QUERY} variables= {{id}}>
                {({loading, error, data}) =>{
                    if (loading) return 'cargando';
                    if (error) return `Error! ${error.message}`;
                    console.log(data);
                 }}

            </Query>
            </Fragment>
        );
    }
}

export default EditarElector;