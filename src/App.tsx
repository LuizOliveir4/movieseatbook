import { loadMovies } from './data/moviesContext.js'
import './App.css'
import Booking from './components/booking.js'

function App() {
  let test = loadMovies()
  console.log(test)
  return (
    <>

      <Booking/>

    </>
  )
}

export default App
