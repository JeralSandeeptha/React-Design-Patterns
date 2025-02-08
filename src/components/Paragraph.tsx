import React from 'react';

type Props = {
  style?: React.CSSProperties
};

const Paragraph = (props: Props) => {

  return (
    <p style={{...props.style}}>This is a Paragraph Component</p>      
  );

}

export default Paragraph;