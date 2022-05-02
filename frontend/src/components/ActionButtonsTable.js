'use strict';
import React from "react";
import { Button } from "react-bootstrap";

export default props =>{

   const  editar = (event) =>{
      props.editar(event)
    }
    const deletar = (event)=>{
        props.deletar(event)
    }
    return(
        <div>
        <Button
          variant="success"
          onClick={(event) => editar(event)}
        >
         <span><i className={'fa fa-edit'}>{' '}</i>{props.textEdit}</span>
        </Button>{' '}
        <Button  
          variant="danger"
          onClick={(event) => deletar(event)}
        >
         <span><i className={'fa fa-trash'}></i>{props.textDeletar}</span>
        </Button>
        </div>
    )
}