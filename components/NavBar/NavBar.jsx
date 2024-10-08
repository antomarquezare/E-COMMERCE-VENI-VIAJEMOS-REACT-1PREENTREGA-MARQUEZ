import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar"> 
      <div className="brand">
        <h2>E-commerce</h2>
        </div>

        <ul>
          <li>Argentina</li>
          <li>Uruguay</li>
          <li>Caribe</li>
          <li>Brasil</li>
        </ul>

      <CartWidget />
    </nav>
  )
}
export default NavBar