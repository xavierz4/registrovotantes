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

    query ConsultarElector($id: ID){
      getElector (id: $id){
        id
        nombre
        apellido
        cedula
        edad
        genero
        email

      
    }

  }`;