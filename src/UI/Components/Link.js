import React from 'react';

const Link = ({children,href}) => {
    return (
        <a onClick={()=>window.open(href)}>{children}</a>
    );
};

export default Link;