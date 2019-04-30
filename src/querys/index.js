import gql from 'graphql-tag';

export const  ELECTORES_QUERY = gql `
   query getElectores($limite:Int, $offset:Int){
      getElectores(limite:$limite, offset: $offset){
        id
        nombre
        apellido
        cedula
      }
        totalElectores
     }
  `;


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