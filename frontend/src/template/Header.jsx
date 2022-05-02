import React from "react";


export default props => {
    return (
        <div>
            <header className="page-header">
                <h2>{props.desc} <small className="text-secondary h6">{props.small}</small></h2>
            </header>
        </div>
    )

}