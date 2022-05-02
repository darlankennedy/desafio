import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Header from './../template/Header';

import ComprasList from "./ComprasList";
import { Row, Col, Button } from "react-bootstrap";

import { handleError, handleSuccessmsg } from '../service/Notify';
import api from '../service/api.js';


export default class Compras extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            list: [],
            loading: false,
            cardTitle: 'Cadastrar Produtos',
            labelBtnSalvarEditar: 'Cadastrar'
        }


        this.handlePageChange = this.handlePageChange.bind(this);
        this.hundleNavete = this.hundleNavete.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.refrash()
    }

   hundleNavete(path){
    let navigate    = useNavigate()
    navigate(path)
    
   }
   handleDeleteClick(event,compra){

    console.log(compra.id)
    
    api.delete(`/compras/${compra.id}`)
    .then(data=>{
        handleSuccessmsg(data.data.msg)
        this.refrash()
    }).catch((erro)=>{
        handleError()
    })

}
   handlePageChange() {
    window.location = "/realizarCompras";
  }
   componentDidMount() { 
    let history = useNavigate;

    }
    refrash() {

        api.get('/compras')
            .then(data => {
                console.log(data)
                this.setState({
                    list: data.data.compras
                })
            }).catch((erro) => {
                handleError(erro.response.data.msg)
            })
    }

    render() {
        
        return (
            <div>
                <Row>
                    <Col>
                        <Header desc="Compras" small="Cadastro" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                        
                       <Button onClick={this.handlePageChange} ><i className="fa fa-credit-card"></i> {' '}<span>compra</span>

                       </Button>
                    </Col>
                </Row>

                <ComprasList
                    compras={this.state.list}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        )
    }
}