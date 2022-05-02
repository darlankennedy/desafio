
'use strict';
import React, { useState } from "react";
import ActionButtonsTable from "./ActionButtonsTable";

const ReadOnlyRow = (props) => {


   const  remove = (e,produto)=>{
     props.handleDeleteClick(e,produto)
   }


    const edit = (e,produto) =>{
      
        props.handleEditClick(e,produto)
    }
    
  return (
    <tr key={props.id}>
       <td className="text-center">{props.produto.id}</td>
       <td className="text-center">{props.produto.nome}</td>
       <td className="text-center">{props.produto.descricao}</td>
       <td className="text-center">R$ {props.produto.preco}</td>
       <td className="text-center">
        <ActionButtonsTable
            textEdit="Editar"
            textDeletar="Deletar"
            editar= {(event) => edit(event,props.produto)}
            deletar={(event) =>remove(event,props.produto)}
        />
      </td>
    </tr>
  );
};
export default ReadOnlyRow;