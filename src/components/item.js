import DescriptionOutlined from '@mui/icons-material/Description';
import InfoOutlined from '@mui/icons-material/Info';
import LocalOfferOutlined  from '@mui/icons-material/LocalOfferOutlined';
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}><InfoOutlined />Details</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;