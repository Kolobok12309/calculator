import '@fortawesome/fontawesome-free/css/all.css';
import 'normalize.css';
import App from './app/index.svelte';
import { Calculator } from './logic';

const app = new App({ target: document.body });

(window as any).Calculator = Calculator;
(window as any).calc = new Calculator();

export default app;
