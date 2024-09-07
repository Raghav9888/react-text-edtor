import React from "react";

export default function Alert(props) {
    const alert = props.alert;
    const {type, msg} = alert || {};
    return (
        <>
            {
                alert && (<div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong>: {msg}
                </div>)
            }
        </>

    )
}