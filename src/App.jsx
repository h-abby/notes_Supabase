import {Routes, Route} from 'react-router'
import CreateNote from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout'



function App () {

  return (
   <Routes>
     <Route element={<Layout/>}>
     <Route index element={<CreateNote/>}/>
     <Route path='/notes' element={<Notes/>}/>
    </Route>
   </Routes>
  )
}
export default App
