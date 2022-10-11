import ItemList from '../components/itemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../utils/products';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([,]);
    const { idCategory } = useParams();

    console.log(idCategory);

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;