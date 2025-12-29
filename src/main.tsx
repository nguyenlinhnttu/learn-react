import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'

import Counter from './component/Counter.tsx'
import EventHandling from './component/EventHandling.tsx'
import ListRendering from './component/ListRendering.tsx'
import ConditionalExample from './component/ConditionRendering.tsx'
import Exercises from './component/Exercises.tsx'
import UseEffectExample from './component/UseEffectExample.tsx'
import DemoHookType from './hooks/demoHookType.tsx'
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <UseEffectExample />
//   </StrictMode>,
// )

//  Send Global Event Demo
function sendGlobalEvent() {
  setInterval(() => {
    const event = new CustomEvent('myGlobalEvent', { detail: 'Hello from global event!' });
    window.dispatchEvent(event);
  }, 5000);
}

sendGlobalEvent();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);