import gql from 'graphql-tag';

export const NUEVO_ELECTOR = gql`
mutation CrearElector($input:ElectorInput){
    crearElector(input:$input){
      id
      nombre
      apellido
      cedula
    }
  }
  `;

  