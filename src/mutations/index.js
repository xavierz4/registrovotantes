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

  export const ACTUALIZAR_CLIENTE = gql`
      mutation actualizarCliente ($input: ClienteInput){
        actualizarCliente (input: $input){
          id
          nombre
          apellido
          empresa
          edad
          tipo
          emails{
            email
          }
          
        }
    }
    
  `;
  export const ELIMINAR_CLIENTE = gql`
    mutation eliminarCliente ($id: ID!){
      eliminarCliente (id: $id)
    }
`;
  