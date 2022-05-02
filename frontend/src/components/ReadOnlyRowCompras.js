
'use strict';
import React, { useState } from "react";
import ActionButtonsTable from "./ActionButtonsTable";

const ReadOnlyRow = (props) => {


  const [preco,setPreco] = useState(props.compra.total)
   const  remove = (e,compra)=>{
     props.handleDeleteClick(e,compra)
   }
   var formatter = new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2});
    const edit = (e,produto) =>{
        props.handleEditClick(e,compra)
    }
    
  return (
    <tr key={props.id}>
       <td className="text-center">{props.compra.id}</td>
       <td className="text-center">{props.compra.status}</td>
       <td className="text-center">{props.compra.tipo_pagamento}</td>
       <td className="text-center">R$ {formatter.format(parseFloat(preco))}</td>
       <td className="text-center">
        <ActionButtonsTable
            textEdit="Editar"
            textDeletar="Deletar"
            editar= {(event) => console(event,props.compra)}
            deletar={(event) => console(event,props.compra)}
        />
      </td>
    </tr>
  );
};
export default ReadOnlyRow;