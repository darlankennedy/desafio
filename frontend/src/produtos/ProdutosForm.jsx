import React from "react";
import { useState, Fragment } from "react";
import { Form } from 'react-bootstrap'
import CurrencyInput from 'react-currency-input-field';
import Cards from './../components/Cards'
import BtnAction from '../components/ActionButtons'
export default props => {

    return (
        <div>
            <Cards 
            title={props.cardTitle}
            subtile="Formulario" 
            >
            <Form className="row">
                    <Form.Group className="mb-3 col-3 ">
                        <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                            type="text"
                            id='nome'
                            name="nome"
                            placeholder="Entre Nome"
                            value={props.objeto.nome}
                            onChange={(event) => props.handleChange(event.target.name,event.target.value)} />
                        </Form.Group>
                    <Form.Group className="mb-3 col-6 ">
                        <Form.Label>Descrição do Produto</Form.Label>
                            <Form.Control
                            type="text"
                            id='descricao'
                            name="descricao"
                            placeholder="Entre Descrição"
                            value={props.objeto.descricao}
                            onChange={(event) => props.handleChange(event.target.name,event.target.value)} />
                        </Form.Group>
                    <Form.Group className="mb-3 col-3 " >
                        <Form.Label>Preço do Produto</Form.Label>
                        <CurrencyInput
                            className="form-control"
                            id="preco"
                            name="preco"
                            intlConfig={{ locale: 'pt-br', currency: 'BRL' }}
                            placeholder="Entre Preço"
                            value={props.objeto.preco}
                            decimalSeparator="," groupSeparator="."
                            decimalsLimit={4}
                            onValueChange={(value, name) =>  props.handleChange(name, value)}
                            />
                    </Form.Group>
                    
                </Form>
                <BtnAction
                    btnSaveOrEditTitle={props.btnSalvarOeditarLabel}
                    btnActionClearTitle="Cancelar"
                    loading={props.loading}
                    cancelBtn={props.cancel}
                    SaveOrEdit={props.handleAdd}
                />
            </Cards>
        </div>
    )
}