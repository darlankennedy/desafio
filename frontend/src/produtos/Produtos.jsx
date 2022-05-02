import React, { Component } from "react";
import Header from './../template/Header'
import api from '../service/api.js'
import ProdutoList from "./ProdutoList";
import ProdutosForm from "./ProdutosForm";
import {handleError,handleSuccessmsg} from '../service/Notify'

export default class Produtos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            descricao: '',
            preco: '',
            id:'',
            list: [],
            loading: false,
            cardTitle:'Cadastrar Produtos',
            labelBtnSalvarEditar:'Cadastrar'
        }

        this.handleOnchegeDados = this.handleOnchegeDados.bind(this)
        this.handleAddProdutos  = this.handleAddProdutos.bind(this)
        this.clear              = this.clear.bind(this)
        this.handleEditClick    = this.handleEditClick.bind(this)
        this.handleDeleteClick  = this.handleDeleteClick.bind(this)
        this.refrash()
    }

  
    handleOnchegeDados(nome, valor) {
        event.preventDefault();

        var nameInput = nome
        const value = valor
        this.setState({
            ...this.state,
            [nameInput]: value
        })
    }

    async handleAddProdutos() {
        this.setState({ loading: true });

        var formatter = parseFloat(this.state.preco.replace(',', '.'));
        console.log(formatter)
        const objeto = {
            id:this.state.id,
            nome: this.state.nome,
            descricao: this.state.descricao,
            preco: formatter
        }
        if(this.state.editar){
            const resultado = await api.put(`/produtos/${this.state.id}`, objeto)
            .then((data)=>{
                handleSuccessmsg(data.data.msg)
                this.refrash()
            }).catch((erro)=>{
                handleError(erro.response.data.msg)
            })
        }else{
            const resultado = await api.post(`/produtos`, objeto)
            .then((data)=>{
                handleSuccessmsg(data.data.msg)
                this.refrash()
            }).catch((erro)=>{
                handleError(erro.response.data.msg)
            })
        }
         
        this.setState({ loading: false });
        this.clear()
    }
    handleEditClick(event,produto){
        event.preventDefault();
        const id_produtoVelho = produto.id

        this.setState({
            nome: produto.nome,
            id:id_produtoVelho,
            descricao: produto.descricao,
            preco: produto.preco,
            editar:true,
            cardTitle:'Atualizar Produtos',
            labelBtnSalvarEditar:'Atualizar'
        })
    }
    handleDeleteClick(event,produto){
        event.preventDefault();


        api.delete(`/produtos/${produto.id}`)
        .then(data=>{
            handleSuccessmsg(data.data.msg)
            this.refrash()
        }).catch((erro)=>{
            handleError(erro.response.data.msg)
        })
    }

    refrash(){
        
        api.get('/produtos')
        .then(data=>{
            this.setState({
                list: data.data.produtos 
            })
        }).catch((erro)=>{
            handleError(erro.response.data.msg)
        })
    }

    clear(){
        this.setState({ 
            nome: '',
            descricao: '',
            preco: '',
            editar:false,
            cardTitle:'Cadastrar Produtos',
            labelBtnSalvarEditar:'Cadastrar'
         });
    }
    render() {
        return (
            <div>
                 <Header desc="Produtos" small="" />
                 <ProdutosForm
                    objeto={this.state}
                    cardTitle={this.state.cardTitle}
                    btnSalvarOeditarLabel={this.state.labelBtnSalvarEditar}
                    loading={this.state.loading}
                    handleChange={this.handleOnchegeDados}
                    handleAdd={this.handleAddProdutos}
                    cancel={this.clear}
                />
                <ProdutoList 
                    produtos={this.state.list}
                    handleDeleteClick={this.handleDeleteClick}
                    handleEditClick={this.handleEditClick}
                 />
            </div>
        );
    }

}