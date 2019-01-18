import React, { Component } from 'react'
import logo from '../logo.svg';
import cart from '../images/cart.png'

export default class MainLayout extends Component {
    constructor(props){
        super(props)

        this.state = {
            itens: [],
            valor: '',
            descrição: '',
        }
    }

    adcItensArr = (value) => {
        this.setState({
            itens: this.state.itens.concat([value])
        })
    }
    render() {
        console.log(this.state.itens)
        return (
            <div className="main">
                <div className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>API REFRIGERANTES</span>
                </div>
                <div className="selecione">
                    <div>
                        <select onChange={ e => this.adcItensArr(e.target.value) }>
                            <option value={null}>Selecione seu refrigerante</option>
                            <option value="coca-cola">Coca-cola</option>
                            <option value="Guarana Jesus">Guarana Jesus</option>
                            <option value="pepsi">Pepsi</option>
                        </select>
                        {this.state.itens.map( (e) =>(
                            <p>{e}</p>
                        ))}
                        <img src={cart} alt={cart}/>
                    </div>
                </div>
                <style jsx>{`
                    .main{
                        background-color: #282c34;
                        height: 100vh;
                    }
                    .main .header{
                        height: 10vh;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: 0.2vh solid #61dafb;
                    }
                    .main .header img{
                        height: 9vh;
                        animation: App-logo-spin infinite 20s linear;
                    }
                    .main .header span{
                        color: #61dafb;
                        padding-right: 15px;
                    }
                    .selecione{
                        height: 89.8vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .selecione select{
                        border: 1px solid #61dafb;
                        background: #4c576dcf;
                        color: #61dafb;
                        padding: 10px 100px 10px 3px;
                    }
                    img{
                        width: 3vw;
                    }
                `}</style>
            </div>
        )
    }
}
