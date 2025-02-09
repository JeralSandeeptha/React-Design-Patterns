import { JSX, useState } from 'react';

type ToggleProps = {
    toggle: (isToggle: boolean) => JSX.Element;
};

const Toggle = (props: ToggleProps) => {

    const [isToggle, setIsToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div>
            {/* this is the peice of code that we are making reusable*/}
            { props.toggle(isToggle) } 
            <button onClick={handleToggle}>Toggle</button>
        </div>
    );

}

export default Toggle;


