import React from 'react';

type Props = {
    style?: React.CSSProperties
};

const Heading = (props: Props) => {

    return (
        <h1 style={{...props.style}}>This is a Heading Component</h1>      
    );

}

export default Heading;