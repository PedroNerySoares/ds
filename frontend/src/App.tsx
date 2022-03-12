import Navbar from 'components/Navbar'
import Form from 'pages/Listining'
import Listing from 'pages/Listining'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/list" element={<Listing />} />
        
        <Route path="/form">
          <Route path=":movieId" element={<Form/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App