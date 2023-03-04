import El from "../../utils/EL";

const Container =(children) => {
    return ( El ({
        Element :'div',
        className: ' mx-auto',
        style:'margin:80px;width:1400px; ',
        children,
    }));

}
export default Container;