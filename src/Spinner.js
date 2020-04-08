import React from 'react';

const Spinner = (props) => {
    return (
        <div className = "ui active inverted dimmer">
            <div className = "ui big text loader">{props.message}</div>
        </div>
    )
}
/* If we forget to add message prop where ever we have used Spinner component
 then React automatically utilizes defaultProps */
Spinner.defaultProps = {
    message : "Loading..."
}
export default Spinner;