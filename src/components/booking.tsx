import Header from "./Header"
import SelectMovie from "./SelectMovie"
import SelectSeat from "./SelectSeat"
import CalculateTotal from "./CalculateTotal"

const Booking = () => {
    return(
        <>
            <Header/>
            <SelectMovie/>
            <SelectSeat/>
            <CalculateTotal/> 
        </>
    )
  }
  
  export default Booking