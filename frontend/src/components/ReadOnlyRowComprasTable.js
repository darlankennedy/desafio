
'use strict';
import React, { useState } from "react";
import ActionButtonsTable from "./ActionButtonsTable";

const ReadOnlyRow = (props) => {

  console.log(props)
   const  remove = (e,produto)=>{
     props.handleDeleteClick(e,produto)
   }


    const edit = (e,produto) =>{
      
        props.handleEditClick(e,produto)
    }
    
  return (
    <tr key={props.id}>
       <td className="text-center">{props.compra.id}</td>
       <td className="text-center">{props.compra.status}</td>
       <td className="text-center">{props.compra.tipo_pagamento}</td>
       <td className="text-center">R$ {props.compra.total}</td>
       <td className="text-center">
        <ActionButtonsTable
            textEdit="Editar"
            textDeletar="Deletar"
            deletar={(event) =>remove(event,props.produto)}
        />
      </td>
    </tr>
  );
};
export default ReadOnlyRow;