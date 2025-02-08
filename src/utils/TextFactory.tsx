const TextFactory = (type: string) => {
    switch (type) {
        case "heading1":
            return () => <h1>Heading 1</h1>;
        case "heading2":
            return () => <h2>Heading 2</h2>;
        case "heading3":
            return () => <h3>Heading 3</h3>;
        case "heading4":
            return () => <h4>Heading 5</h4>;
        case "heading5":
            return () => <h5>Heading 5</h5>;
        case "heading6":
            return () => <h6>Heading 6</h6>;
        default:
            return () => null
    }
}

//we can create elements in here
export const Header1 = TextFactory('heading1');
export const Header2 = TextFactory('heading2');
export const Header3 = TextFactory('heading3');
export const Header4 = TextFactory('heading4');
export const Header5 = TextFactory('heading5');
export const Header6 = TextFactory('heading6');

export default TextFactory;