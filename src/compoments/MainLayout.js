import React, { Component } from 'react'
import logo from '../logo.svg';


export default class MainLayout extends Component {
    render() {
        return (
            <div className="main">
                <div className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>API REFRIGERANTES</span>
                </div>
                <div className="selecione">
                    <div>
                        <select>
                            <option value={null}>Selecione seu refrigerante</option>
                            <option value="coca-cola">Coca-cola</option>
                            <option value="Guarana Jesus">Guarana Jesus</option>
                            <option value="pepsi">Pepsi</option>
                        </select>
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
                `}</style>
            </div>
        )
    }
}
