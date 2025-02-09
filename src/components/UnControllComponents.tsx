import { useRef } from 'react';

const UnControllComponents = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleUser = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        });
    }

    return (
        <div>
            <input type="email" ref={emailRef}/>
            <input type="text" ref={passwordRef}/>
            <button onClick={handleUser}>Click</button>
        </div>
    );

}

export default UnControllComponents;