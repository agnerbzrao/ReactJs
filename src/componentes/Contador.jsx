import React, { Component } from 'react';

class Contador extends Component {
    state ={
        numero:this.props.num
    }
    maisUm = (number)=> {
        this.setState({
            numero : this.state.numero + number
        })
    }    
    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={()=>this.maisUm(10)}>Inc</button>
                <button onClick={()=>this.maisUm(-10)}>Dec</button>
            </div>
        );
    }
}

export default Contador;