import React, { Fragment } from "react";
import Cards from "../components/Cards";
import { Table } from 'react-bootstrap'
import ReadOnlyRow from "../components/ReadOnlyRowComprasProdutos";

export default props => {

    const removerTable =(e,produto,index) => {
        
        props.handleDeleteClick(produto,index)


    }
    return (
        <div className="mt-3">
            <Cards
                title="Lista de Produtos"
                subtile="Formulario"
            >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th className="text-center">#Id</th>
                            <th className="text-center">Nome</th>
                            <th className="text-center">Decrição</th>
                            <th className="text-center">Preço</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.produtos.map((produto, index) => (
                            <Fragment key={index}>
                                <ReadOnlyRow
                                    index={index}
                                    produto={produto}
                                    handleDeleteClick={evet => removerTable(evet,produto,index)}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                    

                    {
                       
                        (props.footer != undefined && props.footer == true) ? (
                    <tfoot>
                        <tr>
                          <td colSpan={2} >quantidade: {props.acumulador}</td>
                          <td colSpan={3}>Total: {props.produtos.length}</td>
                        </tr> 
                    </tfoot>

                        ) : ''

                      
                    }
                   
                    {/* {
                        props.footer != undefined && props.footer == true ? (
                            <tfoot>
                                <tr>
                                    <td>Quantidade: {props.produtos.length} </td>
                                    <td>Valor Total: {props} </td>
                                </tr>
                            </tfoot>
                        ) : ''
                    } */}

                </Table>
            </Cards>
        </div>
    )
}