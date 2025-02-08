type Props = {
    children?: React.ReactNode
}

const ButtonFactory = (type: string) => {
    switch (type) {
      case "primary":
        return (props: Props) => <button style={{ background: "blue", color: "white" }}>{props.children}</button>;
      case "secondary":
        return (props: Props) => <button style={{ background: "gray", color: "white" }}>{props.children}</button>;
      case "danger":
        return (props: Props) => <button style={{ background: "red", color: "white" }}>{props.children}</button>;
      default:
        return (props: Props) => <button>{props.children}</button>;
    }
};

export default ButtonFactory;