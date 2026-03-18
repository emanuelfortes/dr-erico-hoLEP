import './App.css'
import { useAOS } from './hooks/useAOS'
import UrologistaFortaleza  from './pages/UrologistaFortaleza'

export function App() {
   useAOS();
  return (
    <UrologistaFortaleza />
  )
}


