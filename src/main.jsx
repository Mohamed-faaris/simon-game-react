import {StrictMode, useRef} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BoxButton from "./BoxButton.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <>
          <p>app</p>
          <App/>
      </>
  </StrictMode>,
)
