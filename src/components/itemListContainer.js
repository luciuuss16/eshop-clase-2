import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firebaseConfig'

import { async } from '@firebase/util';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
       firestoreFetch()
            .then(() => console.log('End'))  
    }, [datos]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;