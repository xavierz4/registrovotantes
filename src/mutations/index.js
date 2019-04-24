import gql from 'graphql-tag';

export const NUEVO_ELECTOR = gql`
mutation CrearElector($input:ElectorInput){
    crearElector(input:$input){
      id
      nombre
      apellido
      cedula
      edad
      email
      genero
      
    }
  }
  `;

export const ACTUALIZAR_ELECTOR = gql`
mutation actualizarElector ($input: ElectorInput){
  actualizarElector (input: $input){
    id
    nombre
    apellido
    cedula
    edad
    email
    genero
    
    
  }
}

`;


  