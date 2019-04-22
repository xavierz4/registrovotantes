import gql from 'graphql-tag';

export const  ELECTORES_QUERY = gql `
{
    getElectores{
      id
      nombre
      apellido
      cedula
    }
  }`;


export const  ELECTOR_QUERY = gql `

    query ConsultarCliente($id: ID){
      getCliente (id: $id){
        nombre
        apellido
        cedula
      
    }

  }`;