import React, { useState, useEffect, userOptions, userQuery, fetchData, handleSearch } from "react";
import Cards from "../components/Cards";
import BtnAction from '../components/ActionButtons';
import { Form, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { handleError, handleSuccessmsg } from '../service/Notify';
import api from '../service/api.js';
import ProdutoList from "./ProdutosListCompra";

import 'react-bootstrap-typeahead/css/Typeahead.css';


export default props => {


    const [nomeProduto, setNomeProduto] = useState();
    const [produtos, setProdutos] = useState([]);
    const [options, setOptions] = useState([]);
    const [optionsTableProduto, setOptionsTableProduto] = useState([]);
    const [footer, setFooter] = useState(false);
    const [acumulador, setAcumulador] = useState(0)
    const [loading, setLoading] = useState(false)
    const [tipoPagamento, setTipoPagamento] = useState('')


    const handleAddProdutos = () => {

        if (produtos[0] != undefined) {
            setAcumulador(acumulador => parseFloat(acumulador) + parseFloat(produtos[0].preco))
            setOptionsTableProduto(oldArray => [...optionsTableProduto, produtos[0]])
            setFooter(true)
            setProdutos([])
        }
    }



    const handleDeleteClick = (produto, index) => {

        // assigning the list to temp variable
        const temp = [...optionsTableProduto];
        setAcumulador(acumulador => parseFloat(acumulador) - parseFloat(produto.preco))
        // removing the element using splice
        temp.splice(index, 1);
        // updating the list
        setOptionsTableProduto(temp);

    }

    const cancel = () => {

        setNomeProduto()
        setProdutos([])
        setOptionsTableProduto([])
        setAcumulador(0)
        setLoading(false)

    }
 const handleAdd =  async () => {
        console.log()

        const objeto = {

            produtos: optionsTableProduto,
            total: acumulador,
            tipo_pagemnto: tipoPagamento
        }

        setLoading(true)

        const resultado = await api.post(`/fecharCompra`, objeto)
            .then((data) => {
                handleSuccessmsg(data.data.msg)
                cancel()
            }).catch((erro) => {
                handleError(erro.response.data.msg)
                cancel()
            })


        console.log(objeto)
    }
    const changeTipoPgamento = (valor) => {

        setTipoPagamento(valor)

    }

    useEffect(() => {
        api.get("produtos", {}).then((response) => {
            const array = response.data.produtos.map(item => {
                return {
                    ...item,
                    id_produto: item.id,
                    nome_produto: `${item.nome} - R$ ${item.preco}`
                }
            })
            setOptions(array);

        });
    }, []);
    return (
        <div>
            <div className="row mb-2">
                <Cards
                    title="Compras"
                    className="row mb-2"

                >
                    <Form className="row">
                        <Form.Group className="col-8 ">
                            <Form.Label>Burscar Produto</Form.Label>
                            <Typeahead
                                id="basic-typeahead-single"
                                labelKey="nome_produto"
                                onChange={setProdutos}
                                options={options}
                                placeholder="Selecione o Produto"
                                selected={produtos}
                            />
                        </Form.Group>
                        <Form.Group className="col-2 ">
                            <Form.Label>Tipo Pagamento</Form.Label>
                            <Form.Control
                                type="text"
                                id='tipo'
                                name="tipo"
                                placeholder="tipo de pagamento"
                                value={tipoPagamento}
                                onChange={(event) => changeTipoPgamento(event.target.value)}

                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-2 ">
                            <Form.Label className="row">Adicionar</Form.Label>
                            <Button onClick={() => handleAddProdutos()} style={{ width: '60px' }} variant="success"><i className="row fa fa-plus-circle"></i></Button>
                        </Form.Group>

                    </Form>
                    <BtnAction
                        btnSaveOrEditTitle={'Comprar'}
                        btnActionClearTitle="Cancelar"
                        loading={loading}
                        cancelBtn={cancel}
                        SaveOrEdit={handleAdd}
                    />
                </Cards>
            </div>
            <div className="row mt-3">
                <Cards
                    title="Produtos Selecionados"

                >
                    <ProdutoList
                        produtos={optionsTableProduto}
                        handleDeleteClick={handleDeleteClick}
                        footer={footer}
                        acumulador={acumulador}
                    />
                </Cards>
            </div>
        </div>
    );
}