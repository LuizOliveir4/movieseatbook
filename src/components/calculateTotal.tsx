import Footer from "./Footer"

const CalculateTotal = () => {
    return(
        <>
            <p className="text">
            You have selected
            <span id="count"> 0</span> seats for a price of $<span id="total"> 0</span>
            </p>
            <Footer/>
        </>
    )
  }
  
  export default CalculateTotal