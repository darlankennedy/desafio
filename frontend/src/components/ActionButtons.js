'use strict'

import React from "react";
import { Button,Spinner } from "react-bootstrap";

export default props => {
    return (
        <div>
            <Button  variant="success" onClick={props.SaveOrEdit}>
                {props.loading ? (
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="FALSE">
                    </Spinner>
                ) : (
                    <span><i className={'fa fa-'+ props.icon}></i>{props.btnSaveOrEditTitle}</span>
                )}
            </Button>{' '}
            <Button variant="primary" onClick={props.cancelBtn}>
            <span><i className={'fa fa-'+ props.icon}></i>{props.btnActionClearTitle}</span>
            </Button>
        </div>
    )
}