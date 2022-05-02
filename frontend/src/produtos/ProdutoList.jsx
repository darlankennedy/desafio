import React,{Fragment} from "react";
import Cards from "../components/Cards";
import { Table } from 'react-bootstrap'
import ReadOnlyRow from "../components/ReadOnlyRow";

export default props => {
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
                                    produto={produto}
                                    handleDeleteClick={props.handleDeleteClick}
                                    handleEditClick={props.handleEditClick}
                                />
                            </Fragment>
                        ))}
                    </tbody>
                </Table>
            </Cards>
        </div>
    )
}