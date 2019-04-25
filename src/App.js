import React, { Component,Fragment } from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importar componentes

import Header from  './componentes/Header';
import Electores from './componentes/Electores';
import EditarElector from './componentes/EditarElector';
import NuevoElector from './componentes/NuevoElector';

const client = new ApolloClient ({
    uri: "http://localhost:4000/graphql",
    cache: 
    onError: ({networkError, graphQLErrors}) =>{
     console.log('graphQLErrors', graphQLErrors);
      console.log('networkError', networkError); 
    }
});

class App extends Component {
  render() {
    return (
     <ApolloProvider client={client}>
     
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path = "/" component ={Electores} />
              <Route exact path = "/elector/editar/:id" component ={EditarElector} />
              <Route exact path = "/elector/nuevo" component ={NuevoElector} />
            </Switch>
          </div>
        </Fragment>
      </Router>
        
        
     </ApolloProvider>
    );
  }
}

export default App;
