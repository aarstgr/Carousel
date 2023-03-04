import {Splide} from '@splidejs/splide';
import App from "./src/App";
import "./styles.css";

const root = document.getElementById('app');
root.appendChild(App());
new Splide('.splide').mount();






