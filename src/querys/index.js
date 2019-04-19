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

