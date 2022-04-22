import React from 'react';

// custom content container with a mix of fixed and instance-specific css
// adds a splash of colour to whatever page it's on
export default function KQContainer(props) {
    return (
        <div className={"p-4 rounded text-light col-lg-10 offset-lg-1 shadow-sm " + (props.customCss)}>
            {props.children}
        </div>
    );
}