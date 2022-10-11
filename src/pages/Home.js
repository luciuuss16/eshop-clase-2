import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/itemDetailContainer";
import ItemListContainer from "../components/itemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;