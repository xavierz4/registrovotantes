import gql from "graphql-tag";

export const NUEVO_CLIENTE = gql`
mutation CrearCliente($input:ClienteInput){
    crearCliente(input:$input){
      id
      nombre
      apellido
    }
  }
  `;

