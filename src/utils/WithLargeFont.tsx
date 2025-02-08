import { ComponentType } from 'react';

const WithLargeFont = <Props extends object>(WrappedComponent: ComponentType<Props>) => {

  return (props: Props) => {
    return <WrappedComponent {...props} style={{ fontSize: '80px' }}/>
  };

};

export default WithLargeFont;