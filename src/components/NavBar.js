import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className='navbar'>
         <h1>E-Shop</h1>
           <ul className='list'>
             <li>HOME</li>
             <li>Producto</li>
             <li>Contacto</li>
            </ul>
            <CartWidget />
            <button className='btn'>Login</button>
        </nav>
    );
}

export default Navbar;