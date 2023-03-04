import Carousel from "./component/Carousel";

import Container from "./layout/Container";
import El from "./utils/EL";

const App =() => {
    const main = El({
        element:'main',
        style:'',
        children:Container([ Carousel()])

    })
    return main;
}
export default App;
