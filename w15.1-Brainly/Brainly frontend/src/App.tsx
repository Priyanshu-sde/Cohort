import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
    <Button 
     title="share"
     variant="primary"
     size ="md"
     startIcon={<PlusIcon size={"lg"} />}
     endIcon={<ShareIcon size={"lg"} />}     
     ></Button>
    
    </>
  )
}

export default App
