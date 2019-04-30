import React, {Component} from 'react';

class Paginador extends Component {
    state = { 

        paginador : {
            paginas: Math.ceil(Number(this.props.totalElectores) / this.props.limite)
        }
     }
     
    render() {
        const {actual} = this.props;
        const btnAnterior = (actual > 1) ? <button type="button" className="btn btn-success mr-2">&laquo; Anterior</button>:'';  
        
        //botonsiguiente

        const {paginas} = this.state.paginador;
        const btnSiguiente = (actual !== paginas) ? <button type="button" className="btn btn-success mr-2"> Siguiente &raquo;</button>:'';  
        return (
            <div className="mt-5 d-flex justify-content-center">
                {btnAnterior}
                {btnSiguiente}
            </div>
        );
    }
}

export default Paginador;