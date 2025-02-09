import { JSX, useState } from 'react';

type InputProps = {
    renderBelow: (value: string) => JSX.Element;
};

const Input = (props: InputProps) => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <br />
            { props.renderBelow(value) }
        </div>
    );

}

export default Input;