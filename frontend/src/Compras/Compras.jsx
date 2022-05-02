import React, { Component } from "react";
import Header from './../template/Header';

import ComprasList from "./ComprasList";

import {handleError,handleSuccessmsg} from '../service/Notify';
import api from '../service/api.js';


export default class Compras extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            list: [],
            loading: false,
            cardTitle:'Cadastrar Produtos',
            labelBtnSalvarEditar:'Cadastrar'
        }
        

        this.refrash()
    }


    refrash(){
        
        api.get('/compras')
        .then(data=>{
            console.log(data)
            this.setState({
                list: data.data.compras 
            })
        }).catch((erro)=>{
            handleError(erro.response.data.msg)
        })
    }

    render(){
        return(
            <div>
                <Header desc="Compras"  small="Cadastro"/>
                
                <ComprasList  
                    compras={this.state.list}
                />
            </div>
        )
    }
}