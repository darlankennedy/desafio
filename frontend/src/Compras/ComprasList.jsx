import React,{Fragment} from "react";
import Cards from "../components/Cards";
import { Table } from 'react-bootstrap'
import ReadOnlyRowCompras from "../components/ReadOnlyRowCompras";

export default props => {
    console.log(props)
    return (
        <div className="mt-3">
            <Cards
                title="Lista de Compras"
                subtile=""
            >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th className="text-center">#Id</th>
                            <th className="text-center">status</th>
                            <th className="text-center">Tipo de Pagamento</th>
                            <th className="text-center">Total</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                         {props.compras.map((compra, index) => (
                            <Fragment key={index}>
                              <ReadOnlyRowCompras
                                    compra={compra}
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