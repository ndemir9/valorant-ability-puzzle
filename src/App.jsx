import AbilityPuzzle from './pages/ability-puzzle'
import { Toaster } from 'react-hot-toast';
import './assets/css/global.css'
function App() {

  return (
    <>
      <AbilityPuzzle />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
