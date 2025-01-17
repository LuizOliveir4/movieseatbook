import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <Link to="/movieseatbook/admin" className="btn">Admin</Link>
        </header>
    )
  }
  
  export default Header