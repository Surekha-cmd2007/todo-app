
import { createRoot } from 'react-dom/client'
import './index.css'
import {TodoApp} from './App.jsx'

let root=createRoot(document.getElementById('root'))
root.render(
  <>
  <TodoApp/>
  </>
)