import AbilityPuzzle from './pages/ability-puzzle'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
      <AbilityPuzzle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
