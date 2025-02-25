import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import structuredClone from 'structured-clone';

// if (typeof globalThis.structuredClone === 'undefined') {
//   globalThis.structuredClone = structuredClone;
// }


createRoot(document.getElementById('root')).render(
     <App />
)
