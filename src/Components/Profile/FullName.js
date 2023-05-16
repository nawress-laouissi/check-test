import React from 'react';

const fullName = (props) => {
   
    return (
    <div>
    <h1>  {props.firstName} {props.lastName}</h1>

    {/*{props.children}  */}
    {props.children}
        </div>

    );
};

export default fullName;