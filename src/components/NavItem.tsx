import { Link } from 'react-router-dom'

const NavItem = ({ text, navLink}) => {
    return(
        <Link to={navLink} className={"btn btn-primary"}> {text} </Link>
    )
  }
  
  export default NavItem