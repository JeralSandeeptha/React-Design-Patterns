import React from 'react';

type Props = {
    style?: React.CSSProperties
};

const SubTitle = (props: Props) => {

  return (
    <h3 style={{...props.style}}>This is a Sub Title Component</h3>
  );

}

export default SubTitle;